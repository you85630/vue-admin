// import api from 'src/assets/js/api'
import router from 'src/router'

const state = {
  // 用户信息
  userInfo: {}
}

const getters = {
  // 用户信息
  userInfo: state => state.userInfo
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
  getUserInfo ({ commit }) {
    commit('getUserInfo')
  }
}

const mutations = {
  // 登录
  login (state, key) {
    state.userInfo = {
      name: '小明',
      user_id: 1
    }
    // 存储用户信息
    this._vm.VueCookie.set('USER', state.userInfo)
    // 登录跳转
    router.push('/home')

    let nowMsg = {
      code: 200,
      info: '登录成功'
    }
    this.dispatch('showMessage', nowMsg)
  },

  // 退出
  exit (state) {
    state.user = {}
    router.push('/login')
    this._vm.VueCookie.remove('USER')
  },

  // 获取用户信息
  getUserInfo (state) {
    state.user = this._vm.VueCookie.get('USER')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
