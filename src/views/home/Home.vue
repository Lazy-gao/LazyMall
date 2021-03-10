<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template v-slot:content>
        <h3>蘑菇街</h3>
      </template>
    </nav-bar>

    <tab-control :titles="['流行', '新款', '精选']"
                 @controlItemClick="TabControlItemClick"
                 ref="tabControl1"
                 class="tabControl1" v-show="isTabFixed">
    </tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">

      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>

      <home-recommend :recommends="recommends"></home-recommend>

      <home-feature></home-feature>

      <tab-control :titles="['流行', '新款', '精选']"
                   @controlItemClick="TabControlItemClick"
                   ref="tabControl2"
                   class="tabControl2">
      </tab-control>

      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>

    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from 'views/home/homeChildren/HomeSwiper'
import HomeRecommend from 'views/home/homeChildren/HomeRecommend'
import HomeFeature from 'views/home/homeChildren/HomeFeature'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
import { getHomeMultidata, getHomeGoods } from 'request/home'
import { debounce } from 'common/utils'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabControlOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  created () {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    this.$nextTick(() => {
      // 利用防抖函数来进行限制每张图片都要刷新一次的次数
      const refresh = debounce(this.$refs.scroll.refresh, 500)

      // 监听item中图片的加载完成
      // 利用事件总线机制来监听图片的加载完成，等图片加载完成时进行重新计算可滚动区域的高度
      this.$bus.$on('itemImageLoad', () => {
        // 重新计算可滚动区域的高度是调用 BScroll 中的 refresh()方法
        refresh()
      })
    })
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // 上拉加载更多请求到的数据添加到对应类型的数组中
        this.goods[type].list.push(...res.data.list)
        // 每次往数组中添加完数据之后对应的页码 + 1
        this.goods[type].page += 1
        // 监测到上拉刷新的动作之后，pullingUp 事件的消费机会只有一次，因此需要调用 finishPullUp()
        // 来告诉 BetterScroll 来提供下一次 pullingUp 事件的消费机会
        this.$refs.scroll.finishPullUp()
      })
    },
    TabControlItemClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backTopClick () {
      // 访问组件对象中的scrollTo方法，
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll (position) {
      // 判断backTop是否显式
      this.isShowBackTop = -(position.y) > 1000
      // 决定 tabControl是否吸顶（position：fixed）
      this.isTabFixed = -(position.y) > this.tabControlOffsetTop
    },
    loadMore () {
      // 根据对应的类型来加载数据
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad () {
      // 获取tabControl组件的 offsetTop 值
      // 所有的组件都有一个属性 $el:用于获取组件中的元素
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getScrollY()
  }
}
</script>

<style scoped lang="scss">
#home {
  position: relative;
  height: 100vh;

  .home-nav-bar {
    background-color: $color-tint;
    color: #fff;
  }

  .tabControl1 {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 48px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>
