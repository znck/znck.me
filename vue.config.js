module.exports = {
  lintOnSave: false,
  /** @param {import('webpack-chain')} config */
  chainWebpack(config) {
    config.module
      .rule('yaml')
      .test(/\.yml$/)
      .use('json-loader')
      .loader('json-loader')
      .end()
      .use('yaml-loader')
      .loader('yaml-loader')
  },
}
