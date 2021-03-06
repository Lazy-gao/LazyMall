<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item"
         :class="{active:index===currentIndex? 'active':''}" @click="TabControlClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    TabControlClick (index) {
      this.currentIndex = index
      this.$emit('controlItemClick', index)
    }
  }
}
</script>

<style scoped lang="scss">
.tab-control {
  display: flex;
  margin-top: 10px;
  text-align: center;

  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    color: $color-text;

    span {
      padding: 5px;
    }

    &.active {
      color: $color-high-text;

      span {
        border-bottom: 2px solid $color-high-text;
      }
    }
  }
}
</style>
