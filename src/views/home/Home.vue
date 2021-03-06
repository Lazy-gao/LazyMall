<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template v-slot:content>
        <h3>蘑菇街</h3>
      </template>
    </nav-bar>

    <home-swiper :banners="banners"></home-swiper>

    <home-recommend :recommends="recommends"></home-recommend>

    <home-feature></home-feature>

    <tab-control :titles="['流行', '新款', '精选']"
                 class="tabControl"
                 @controlItemClick="TabControlItemClick">
    </tab-control>

    <goods-list :goods="goods[currentType].list"></goods-list>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from 'views/home/homeChildren/HomeSwiper'
import HomeRecommend from '@/views/home/homeChildren/HomeRecommend'
import HomeFeature from '@/views/home/homeChildren/HomeFeature'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import { getHomeMultidata, getHomeGoods } from 'request/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList
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
      currentType: 'pop'
      // filter: []
    }
  },
  created () {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
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
        console.log(res)
        // this.filter = res.data[0].filter.list
        // 上拉加载更多请求到的数据添加到对应类型的数组中
        this.goods[type].list.push(...res.data.list)
        // 每次往数组中添加完数据之后对应的页码 + 1
        this.goods[type].page += 1
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
    }
  }
}
</script>

<style scoped lang="scss">
#home {
  .home-nav-bar {
    background-color: $color-tint;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }

  .tabControl {
    position: sticky;
    top: 44px;
    background-color: #fff;
    z-index: 9;
  }
}
</style>
