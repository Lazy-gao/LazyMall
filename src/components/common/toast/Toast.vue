<template>
  <div class="toast" v-show="show" :style="{backgroundColor:bColor}">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },

  data () {
    return {
      message: '',
      bColor: '',
      show: false
    }
  },
  methods: {
    showToast (message = '成功', bColor = 'rgba(0, 0, 0, .7)', duration = 1000) {
      this.message = message
      this.bColor = bColor
      this.show = true

      setTimeout(() => {
        this.message = ''
        this.bColor = ''
        this.show = false
      }, duration)
    }
  }
}
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  z-index: 99;
}
</style>
