<template>
  <div class="vacancy-cart">
    <img src="~assets/img/cart/vacancy-cart.png" alt="">
    <p class="emptycart-text">你的购物车空空如也</p>
    <p class="emptycart-btn">
      <span class="base-button">去逛逛</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'VacancyCart'
}
</script>

<style scoped lang="scss">
.vacancy-cart {
  background: #fff;
  width: 100%;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .emptycart-text {
    margin: -65px 0 5px;
    font-size: 12px;
    color: #5e5e5e;
  }

  .emptycart-btn {
    padding-bottom: 15px;

    .base-button {
      display: inline-block;
      box-sizing: border-box;
      font-size: 15px;
      padding: 6px 12.5px;
      border-radius: 4px;
      vertical-align: middle;
      margin: 4px 6px;
      cursor: pointer;
      text-align: center;
      color: white;
      background: #ff5777;
    }
  }
}
</style>
