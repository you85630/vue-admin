// import api from 'src/assets/js/api'
import router from 'src/router'

const state = {
  //  左导航
  Menu: [
    {
      id: 1,
      icon: 'md-bulb',
      title: '页面',
      nameBox: [
        {
          icon: 'md-albums',
          title: 'page1',
          name: 'page1',
          link: '/home/page1'
        },
        {
          icon: 'md-document',
          title: 'page4',
          name: 'page4',
          link: '/home/page4'
        }
      ]
    },
    {
      id: 2,
      icon: 'md-bulb',
      title: '页面2',
      nameBox: [
        {
          icon: 'md-browsers',
          title: 'page2',
          name: 'page2',
          link: '/home/page2'
        },
        {
          icon: 'md-desktop',
          title: 'page3',
          name: 'page3',
          link: '/home/page3/1'
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
  // 登录
  login (state, key) {
    // 存储用户信息
    this._vm.VueCookie.set('token', 'token')
    this._vm.VueCookie.set('user', state.user)
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
    this._vm.VueCookie.remove('user')
    this._vm.VueCookie.remove('link')
    this._vm.VueCookie.remove('tablist')
  },

  // 获取用户信息
  User (state) {
    state.user = this._vm.VueCookie.get('user')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
