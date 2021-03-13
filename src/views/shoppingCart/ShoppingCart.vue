<template>
  <div class="cart">
    <cart-nav-bar></cart-nav-bar>
    <cart-list v-if="this.$store.state.cartList.length"></cart-list>
    <cart-bottom-bar v-if="this.$store.state.cartList.length"></cart-bottom-bar>
    <vacancy-cart v-else></vacancy-cart>
  </div>
</template>

<script>
import CartNavBar from 'views/shoppingCart/cartChildren/CartNavBar'
import CartList from 'views/shoppingCart/cartChildren/CartList'
import CartBottomBar from 'views/shoppingCart/cartChildren/CartBottomBar'
import VacancyCart from 'views/shoppingCart/cartChildren/VacancyCart'

export default {
  name: 'ShoppingCart',
  components: {
    CartNavBar,
    CartList,
    CartBottomBar,
    VacancyCart
  }
}
</script>

<style scoped lang="scss">
.cart {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #efefef;
}
</style>
