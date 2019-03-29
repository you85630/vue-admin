// import api from 'assets/js/api'
import router from 'src/router'

const state = {
  // 路由
  routerList: [
    {
      path: '/home',
      name: 'home',
      component: 'views/home',
      children: [
        {
          path: '/home/page1',
          name: 'page1',
          component: 'components/pages/page1',
          meta: {
            title: 'page1'
          }
        },
        {
          path: '/home/page2',
          name: 'page2',
          component: 'components/pages/page2',
          meta: {
            title: 'page2'
          }
        },
        {
          path: '/home/page3',
          name: 'page3',
          component: 'components/pages/page3',
          meta: {
            title: 'page3'
          }
        },
        {
          path: '/home/page4',
          name: 'page4',
          component: 'components/pages/page4',
          meta: {
            title: 'page4'
          }
        }
      ]
    }
  ],
  //  左导航
  Menu: [
    {
      id: 1,
      icon: 'logo-buffer',
      title: '页面结构说明',
      nameBox: [
        {
          icon: 'ios-albums',
          title: '布局',
          link: '/home/page1'
        }
      ]
    }, {
      id: 2,
      icon: 'ios-cog',
      title: '自定义组件',
      nameBox: [
        {
          icon: 'md-bulb',
          title: '通告栏',
          link: '/home/page2'
        }
      ]
    }, {
      id: 3,
      icon: 'md-cube',
      title: '项目',
      nameBox: [
        {
          icon: 'md-list-box',
          title: '项目清单',
          link: '/home/page3'
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
