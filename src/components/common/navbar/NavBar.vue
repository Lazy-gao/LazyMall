<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  box-shadow: 0 3px 1px rgba(100, 100, 100, .2);

  .left {
    width: 60px;
  }

  .content {
    flex: 1;
  }

  .right {
    width: 60px;
  }
}
</style>
