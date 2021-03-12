<template>
  <div class="bottom-bar">
    <div class="checkout-checkbox">
      <div class="checkout-checkbox--all" :class="{'active':isSelectAll}" @click="selectAllClick"></div>
      <span>全选({{ checkLength }})</span>
    </div>
    <div class="account">
      <div class="ui-save-price">
        {{ totalPrice | showPrice }}
      </div>
      <div class="ui-checkout-btn">结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartBottomBar',
  computed: {
    totalPrice () {
      return this.$store.state.cartList.filter((item) => {
        return item.checked
      }).reduce((pre, cur) => {
        return pre + cur.price * cur.count
      }, 0)
    },
    checkLength () {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll () {
      if (this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  filters: {
    showPrice (price) {
      return '￥' + price.toFixed(2)
    }
  },
  methods: {
    selectAllClick () {
      if (this.isSelectAll) { // 全部选中
        this.$store.state.cartList.forEach((item) => {
          item.checked = false
        })
      } else { // 部分或全部补选中
        this.$store.state.cartList.forEach(item => {
          item.checked = true
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bottom-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  border-top: 1px solid #d8d8d8;
  background: #fefefe;
  z-index: 9;

  .checkout-checkbox {
    display: inline-block;
    line-height: 30px;
    vertical-align: top;
    flex: 1;

    .checkout-checkbox--all {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      margin-right: 5px;
      border: 1px solid #d7d7d7;
      border-radius: 100%;
    }

    span {
      vertical-align: middle;
      font-size: 14px;
      color: #5e5e5e;
    }

    .active {
      width: 20px;
      height: 20px;
      background: url("~assets/img/cart/checkButton.png");
      background-size: 20px 20px;
      border: none;
    }

  }

  .account {
    display: flex;

    .ui-save-price {
      line-height: 30px;
      font-size: 16px;
      font-weight: 700;
      color: #f46;

      span {
        margin-right: 1px;
        font-size: 10px;
        font-weight: 500;
      }
    }

    .ui-checkout-btn {
      width: 62px;
      height: 28px;
      line-height: 28px;
      border-radius: 15px;
      padding: 0;
      background: #ff5777;
      color: #fff;
      font-size: 16px;
      text-align: center;
      margin-left: 9px;
    }
  }
}
</style>
