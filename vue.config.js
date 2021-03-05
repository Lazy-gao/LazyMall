module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        request: '@/request',
        router: '@/router',
        store: '@/store',
        views: '@/views'
      }
    }
  }
}
