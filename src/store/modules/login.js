// import api from 'src/assets/js/api'
import router from 'src/router'

const state = {
  //  左导航
  Menu: [
    {
      icon: 'md-bulb',
      title: '组1',
      children: [
        {
          icon: 'md-browsers',
          title: 'page1',
          name: 'page1',
          link: '/home/page1'
        },
        {
          icon: 'md-body',
          title: 'page2',
          name: 'page2',
          link: '/home/page2'
        }
      ]
    },
    {
      icon: 'md-body',
      title: '组2',
      children: [
        {
          icon: 'md-browsers',
          title: 'page3',
          name: 'page3',
          link: '/home/page3/1'
        },
        {
          icon: 'md-body',
          title: 'page4',
          name: 'page4',
          link: '/home/page4'
        }
      ]
    }
  ],
  // 用户信息
  people: {
    name: '小明',
    user_id: 1
  }
}

const getters = {
  //  左导航
  Menu: state => state.Menu,
  // 用户信息
  people: state => state.people
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
  userInfo ({ commit }) {
    commit('userInfo')
  }
}

const mutations = {
  // 登录
  login (state, key) {
    // 存储用户信息
    this._vm.VueCookie.set('USER', state.people)
    this.state.utils.Message = {
      code: 200
      // info: '账号或密码错误'
    }
    router.push('/home')
  },

  // 退出
  exit (state) {
    this.state.utils.Message = {}
    state.user = {}
    router.push('/login')
    this._vm.VueCookie.remove('USER')
    this._vm.VueCookie.remove('LINK')
    this._vm.VueCookie.remove('TABLIST')
  },

  // 获取用户信息
  userInfo (state) {
    state.user = this._vm.VueCookie.get('USER')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
