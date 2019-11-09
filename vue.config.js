const path = require('path')

const ENV = 1

const ENVList = [
  {
    api: '/', // 生产
    dist: 'pro-dist'
  },
  {
    api: '/', // 开发
    dist: 'dev-dist'
  }
]

module.exports = {
  // baseURL: ENVList[ENV].api,
  outputDir: ENVList[ENV].dist,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  runtimeCompiler: true,
  assetsDir: 'assets',
  devServer: {
    host: 'localhost',
    port: 2222,
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.join(__dirname, 'src'),
        'store': path.join(__dirname, 'src/store'),
        'views': path.join(__dirname, 'src/views'),
        'assets': path.join(__dirname, 'src/assets'),
        'components': path.join(__dirname, 'src/components')
      }
    }
  }
}
