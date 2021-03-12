<template>
  <nav-bar class="cartNav">
    <template v-slot:left>
      <div class="nav-left" @click="comeBack">
        <img src="~assets/img/common/back.svg" alt="" class="back">
      </div>
    </template>

    <template v-slot:content>
      <div>购物车 ({{ cartGoodsNum }})</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { mapGetters } from 'vuex'

export default {
  name: 'CartNavBar',
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['cartGoodsNum'])
  },
  methods: {
    comeBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="scss">
.cartNav {
  border-bottom: 1px dotted #ededed;
  background-color: #fafafa;
  color: #5e5e5e;

  .nav-left {
    img {
      vertical-align: middle;
    }
  }
}
</style>
