import Vue from 'vue'
import App from './App'
// 引入路由
import router from './router'
// 引入vuex
import store from './store/index.js'
// IE兼容
import 'babel-polyfill'
// 引入UI
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// 重置全局样式
import 'assets/css/reset.css'
// 引入echarts
import echarts from 'echarts'
// 引入存储组件
import VueCookie from 'vue-cookie'
// 全局事件
import utils from 'assets/js/utils.js'
// 全局引用自定义模板
import commonVue from 'components/common'

// 全局使用
Vue.prototype.utils = utils
Vue.prototype.$echarts = echarts
Vue.prototype.VueCookie = VueCookie

// 使用
Vue.use(iView)
Vue.use(commonVue)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(() => {
  iView.LoadingBar.finish()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
