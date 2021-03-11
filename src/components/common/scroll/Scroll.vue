<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'

BScroll.use(PullUp)

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: {}
    }
  },
  created () {
    this.$nextTick(() => {
      // 1.创建 BScroll 对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      // 2.监听滚动位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }
      // 3.监听上拉事件
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    })
  },
  methods: {
    // 封装scrollTo方法，方便外界直接访问这个方法
    scrollTo (x, y, time = 500) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    refresh () {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    getScrollY () {
      return this.scroll.y ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped lang="scss">

</style>
