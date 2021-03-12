<template>
  <div class="back-cart">
    <img src="~assets/img/cart/cart.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackCart'
}
</script>

<style scoped lang="scss">
.back-cart {
  position: fixed;
  top: 50px;
  right: 10px;
  background-color: rgba(0, 0, 0, .4);
  border-radius: 100%;

  img {
    width: 40px;
    height: 40px;
  }
}
</style>
