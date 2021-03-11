<template>
  <div class="bottom-bar">
    <div class="left-bar">
      <div class="service">
        <i class="icon"></i>
        <span class="text">客服</span>
      </div>
      <div class="shop">
        <i class="icon"></i>
        <span class="text">店铺</span>
      </div>
      <div class="collect">
        <i class="icon"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right-bar">
      <div class="cart" @click="cartClick">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    cartClick () {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped lang="scss">
.bottom-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #666;

  .left-bar {
    flex: 1;
    display: flex;
    background-color: #fff;

    .service {
      flex: 1;
      border-right: 1px solid #ededed;
      color: #ff5777;

      .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 3px;
        background: url('~assets/img/detail/detail_bottom.png') 0 -54px/100%;
      }
    }

    .shop {
      flex: 1;
      border-right: 1px solid #ededed;

      .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 3px;
        background: url('~assets/img/detail/detail_bottom.png') 0 -98px/100%;
      }
    }

    .collect {
      flex: 1;

      .icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 10px auto 3px;
        background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
      }
    }
  }

  .right-bar {
    flex: 1;
    display: flex;
    text-align: center;
    line-height: 50px;
    background-color: #ff5f3e;

    .cart {
      flex: 1;
      color: #ff5777;
      background-color: #ffe6e8;
    }

    .buy {
      flex: 1;
      color: #fff;
      background-color: #ff4a88;
    }
  }
}
</style>
