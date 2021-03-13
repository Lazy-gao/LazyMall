import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import 'lib-flexible/flexible'

Vue.prototype.$bus = new Vue()

// 安装封装的 toast 插件
Vue.use(toast)

// 安装图片懒加载
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

// 解决移动端300ms延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
