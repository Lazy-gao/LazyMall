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
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/css/base.scss";'
      },
      scss: {
        prependData: '@import "~@/assets/css/base.scss";'
      }
    }
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule('scss')
  //     .test(/\.scss$/)
  //     .oneOf('vue')
  //     .use('px2rem-loader')
  //     .loader('px2rem-loader')
  //     .before('postcss-loader') // this makes it work.
  //     .options({ remUnit: 75 })
  //     .end()
  // }

}
