<template>
  <div id="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div class="recommend-title">
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
#recommend {
  display: flex;
  margin-top: 10px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;

  .recommend-item {
    flex: 1;
    text-align: center;

    img {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }

    .recommend-title {
      color: $color-text;
      font-size: 14px;
    }
  }
}
</style>
