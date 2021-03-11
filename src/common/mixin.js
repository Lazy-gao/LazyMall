import { debounce } from '@/common/utils'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 利用防抖函数来进行限制每张图片都要刷新一次的次数
      const refresh = debounce(this.$refs.scroll.refresh, 500)

      // 监听item中图片的加载完成
      // 利用事件总线机制来监听图片的加载完成，等图片加载完成时进行重新计算可滚动区域的高度
      this.itemImgListener = () => {
        // 重新计算可滚动区域的高度是调用 BScroll 中的 refresh()方法
        refresh()
      }
      this.$bus.$on('itemImageLoad', this.itemImgListener)
    })
  }
}

export const backTopMixin = {
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTopClick () {
      // 访问组件对象中的scrollTo方法，
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
