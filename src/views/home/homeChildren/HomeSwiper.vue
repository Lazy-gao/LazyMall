<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
    // 轮播图有4章图片，所以会执行四次这个函数，其实我们只需要执行一次就可以了，因为轮播图的图片都是一样大小的
    // 所以利用变量来进行控制，如果为真，就是已经执行了一次，就把该控制变量改为true，不让在执行该函数
    swiperLoad () {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
