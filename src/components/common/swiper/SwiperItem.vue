<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Slide'
}
</script>

<style scoped lang="scss">
.slide {
  width: 100%;
  flex-shrink: 0;

  img {
    width: 100%;
  }
}
</style>
