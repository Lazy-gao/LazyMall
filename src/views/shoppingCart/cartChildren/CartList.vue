<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :product="item" :key="index"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from 'views/shoppingCart/cartChildren/CartListItem'
import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated () {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped lang="scss">
.cart-list {
  height: calc(100% - 49px - 44px);
  overflow: hidden;

  .content {
    height: 100%;
  }
}
</style>
