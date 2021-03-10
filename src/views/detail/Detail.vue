<template>
  <div id="detail-info">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true">
      <detail-swiper :top-images="topImages"></detail-swiper>

      <detail-base-info :goods="goods"></detail-base-info>

      <detail-comment-info></detail-comment-info>

      <detail-shop-info :shop="shop"></detail-shop-info>

      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>

      <detail-param-info :param-info="paramInfo"></detail-param-info>

    </scroll>

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
import Scroll from 'components/common/scroll/Scroll'
import { getDetail, GoodsInfo, Shop, GoodsParam } from 'request/detail'

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
    Scroll
  },
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {}
    }
  },
  created () {
    // 保存跳转路由时携带过来的商品id
    this.iid = this.$route.query.iid
    this.getDetail(this.iid)
    this.$nextTick(() => {
      console.log(this.$refs.scroll)
    })
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
        this.commentInfo = data.rate.list[0]

        // 4.获取店铺信息
        this.shop = new Shop(data.shopInfo)

        // 5.商品详情图片
        this.detailInfo = data.detailInfo

        // 6.获取商品型号参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      })
    },
    imageLoad () {
      this.$refs.scroll.refresh()
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
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>
