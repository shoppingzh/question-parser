module.exports = {
  chainWebpack: config => {
    config.module
      .rule('txt')
      .test(/.txt$/)
      .use('raw-loader')
      .loader('raw-loader')
  }
}