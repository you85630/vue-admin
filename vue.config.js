const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  productionSourceMap: false,
  assetsDir: 'static',
  runtimeCompiler: true,
  devServer: {
    host: 'localhost',
    port: 2333
  },
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.join(__dirname, 'src'),
        'views': path.join(__dirname, 'src/views'),
        'assets': path.join(__dirname, 'src/assets'),
        'components': path.join(__dirname, 'src/components')
      }
    }
  }
}
