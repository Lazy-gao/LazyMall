<template>
  <div id="detail-info">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="detailNav"></detail-nav-bar>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <back-cart class="back-cart" @click.native="backToCart"></back-cart>

      <detail-base-info :goods="goods"></detail-base-info>

      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>

      <detail-shop-info :shop="shop"></detail-shop-info>

      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>

      <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>

      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>

    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    <!--    <toast :message="message" :show="show"></toast>-->

    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>

  </div>
</template>

<script>
import DetailNavBar from 'views/detail/detailChildren/DetailNavBar'
import DetailSwiper from 'views/detail/detailChildren/DetailSwiper'
import DetailBaseInfo from 'views/detail/detailChildren/DetailBaseInfo'
import DetailCommentInfo from 'views/detail/detailChildren/DetailCommentInfo'
import DetailShopInfo from 'views/detail/detailChildren/DetailShopInfo'
import DetailGoodsInfo from 'views/detail/detailChildren/DetailGoodsInfo'
import DetailParamInfo from 'views/detail/detailChildren/DetailParamInfo'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import DetailBottomBar from 'views/detail/detailChildren/DetailBottomBar'
import BackCart from 'components/content/backCart/BackCart'
import { getDetail, GoodsInfo, Shop, GoodsParam, getRecommend } from 'request/detail'
import { itemListenerMixin, backTopMixin } from 'common/mixin'

// import Toast from '@/components/common/toast/Toast'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailCommentInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
    DetailBottomBar,
    GoodsList,
    BackCart
    // Toast
  },
  mixins: [itemListenerMixin, backTopMixin],
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopY: [],
      currentIndex: 0
      // message: '',
      // show: false
    }
  },
  created () {
    // 保存跳转路由时携带过来的商品id
    this.iid = this.$route.query.iid
    this.getDetail(this.iid)
    this.getRecommend()
  },
  destroyed () {
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  methods: {
    getDetail (iid) {
      getDetail(iid).then(res => {
        console.log(res)
        const data = res.result

        // 1.获取轮播图数据
        this.topImages = data.itemInfo.topImages

        // 2.获取商品基本信息
        this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate
        }

        // 4.获取店铺信息
        this.shop = new Shop(data.shopInfo)

        // 5.商品详情图片
        this.detailInfo = data.detailInfo

        // 6.获取商品型号参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      })
    },
    imageLoad () {
      // 图片加载完后重新计算高度
      this.$refs.scroll.refresh()

      // 获取元素的offsetTop值
      this.themeTopY = []

      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.param.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
    },
    getRecommend () {
      getRecommend().then((res) => {
        this.recommend = res.data.list
      })
    },
    titleClick (index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 500)
    },
    contentScroll (position) {
      // 判断backTop是否显式
      this.isShowBackTop = -(position.y) > 1000

      const positionY = -position.y

      const length = this.themeTopY.length
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1]) || (i === length - 1 && positionY >= this.themeTopY[i]))) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = this.currentIndex
        }
      }
    },
    addToCart () {
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.style = this.commentInfo.list[0].style
      product.name = this.shop.name
      product.iid = this.iid

      // 2.将商品添加到购物车
      // 2.1 将商品信息添加到Vuex中的state中进行保存，
      this.$store.dispatch('addCart', product).then(res => {
        // this.show = true
        // this.message = res
        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // }, 2000)

        this.$toast.showToast(res, 2000)
      })
    },
    backToCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped lang="scss">
#detail-info {
  position: relative;
  height: 100vh;
  background-color: #fff;
  z-index: 9;

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    //height: calc(100% - 44px);
    //position: absolute;
    //top: 44px;
    //bottom: 60px;

    position: absolute;
    top: 44px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;

    //.back-cart {
    //  position: fixed;
    //  top: 5px;
    //  right: 5px;
    //}
  }
}
</style>
