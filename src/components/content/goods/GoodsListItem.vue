<template>
  <div class="goodsList-item" @click="goodsItemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    showImage () {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad () {
      // 利用事件总线来把事件传递出去
      this.$bus.$emit('itemImageLoad')
    },
    goodsItemClick () {
      // 点击商品跳转至商品详情页面
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodsItem.iid
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.goodsList-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;

  img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    font-size: 12px;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }

    .price {
      color: $color-high-text;
      margin-right: 20px;
    }

    .collect {
      position: relative;
    }

    ::before {
      content: '';
      position: absolute;
      left: -15px;
      top: 0;
      width: 14px;
      height: 14px;
      background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
  }
}
</style>
