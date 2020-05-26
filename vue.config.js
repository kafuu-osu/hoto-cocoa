module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080
  },
  assetsDir: 'assets',

  pluginOptions: {
    i18n: {
      locale: 'cn',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {

        },
        javascriptEnabled: true
      }
    }
  },

  productionSourceMap: false
}
