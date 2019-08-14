module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/function.scss";@import "@/assets/scss/common.scss";'
      }
    }
  }
}