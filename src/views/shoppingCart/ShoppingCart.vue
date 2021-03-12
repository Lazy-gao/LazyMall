<template>
  <div class="cart">
    <cart-nav-bar></cart-nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartNavBar from 'views/shoppingCart/cartChildren/CartNavBar'
import CartList from 'views/shoppingCart/cartChildren/CartList'
import CartBottomBar from 'views/shoppingCart/cartChildren/CartBottomBar'

export default {
  name: 'ShoppingCart',
  components: {
    CartNavBar,
    CartList,
    CartBottomBar
  }
}
</script>

<style scoped lang="scss">
  .cart {
    height: 100vh;
    background-color: #efefef;
  }
</style>
