// import api from 'src/assets/js/api'
import router from 'src/router'

const state = {
  // 路由
  routerList: [
    {
      path: '/home',
      name: 'home',
      component: 'views/home',
      children: [
        // 演示
        {
          path: '/home/page1',
          component: 'components/pages/demo/page1'
        },
        {
          path: '/home/page2',
          component: 'components/pages/demo/page2'
        },
        {
          path: '/home/page3',
          component: 'components/pages/demo/page3'
        }
      ]
    }
  ],
  //  左导航
  Menu: [
    {
      id: 1,
      icon: 'md-bulb',
      title: '全局事件',
      nameBox: [
        {
          icon: 'ios-albums',
          title: '事件',
          link: '/home/page1'
        }
      ]
    }
  ],
  // 用户信息
  user: {
    name: '小明'
  }
}

const getters = {
  //  左导航
  Menu: state => state.Menu,
  // 用户信息
  user: state => state.user
}

const actions = {
  // 获取路由
  getRouter ({ commit }) {
    commit('getRouter')
  },
  // 登录
  login ({ commit }, key) {
    commit('login', key)
  },

  // 退出
  exit ({ commit }) {
    commit('exit')
  },
  // 获取用户信息
  User ({ commit }) {
    commit('User')
  }
}

const mutations = {
  // 获取路由
  getRouter (state) {
    let nowRouter = []
    let rot = state.routerList
    if (rot) {
      this._vm.utils.addNewRouter(rot, nowRouter)
      router.addRoutes(nowRouter)
    }
  },
  // 登录
  login (state, key) {
    // 存储用户信息
    this._vm.VueCookie.set('user', JSON.stringify(state.user))
    this.state.utils.Message = {
      code: 200
    }
    router.push('/home')
  },
  // 退出
  exit (state) {
    this.state.utils.Message = {}
    state.user = {}
    router.push('/login')
    this._vm.VueCookie.delete('user')
    this._vm.VueCookie.delete('link')
    this._vm.VueCookie.delete('tablist')
  },

  // 获取用户信息
  User (state) {
    state.user = JSON.parse(this._vm.VueCookie.get('user'))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
