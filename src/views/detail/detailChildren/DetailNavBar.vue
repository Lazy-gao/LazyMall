<template>
  <nav-bar class="detail-nav">
    <template v-slot:left>
      <div class="nav-left" @click="detailBack">
        <img src="~assets/img/common/back.svg" alt="" class="back">
      </div>
    </template>

    <template v-slot:content>
      <div class="title">
        <a href="#" class="title-item" v-for="(item, index) in title" :key="index">
          <span :class="{active: index===currentIndex? 'active': ''}"
                @click="titleClick(index)">
            {{ item }}
          </span>
        </a>
      </div>
    </template>

    <template v-slot:right>
      <div class="more">
        <img src="~assets/img/detail/more.png" alt="" class="moreImage">
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    detailBack () {
      this.$router.back()
    },
    titleClick (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
.detail-nav {
  .back {
    margin-top: 12px;
  }

  .title {
    display: flex;
    padding: 0 20px;
    font-size: 14px;

    .title-item {
      flex: 1;
      span {
        padding: 5px;
      }
    }

    .active {
      color: $color-high-text;
      font-weight: 600;
      border-bottom: 2px solid $color-high-text;
    }
  }

  .moreImage {
    width: 22px;
    height: 22px;
    margin-top: 12px;
  }
}
</style>
