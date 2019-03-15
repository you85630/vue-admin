import router from './../../router'

export default {
  state: {
    // tab导航
    tabList: [],
    // 当前面包屑
    breadcrumb: [],
    // 当前展开
    nowOpen: [],
    // 当前页面
    nowTab: ''
  },
  getters: {
    tabList: state => state.tabList,
    breadcrumb: state => state.breadcrumb,
    nowOpen: state => state.nowOpen,
    nowTab: state => state.nowTab
  },
  actions: {
    goHome ({ commit }) {
      commit('goHome')
    },
    addTabs ({ commit }, key) {
      commit('addTabs', key)
    },
    removeTabs ({ commit }, key) {
      commit('removeTabs', key)
    },
    defaultTabList ({ commit }, key) {
      commit('defaultTabList', key)
    }
  },
  mutations: {
    // 跳转主页
    goHome (state) {
      state.tabList = []
      state.breadcrumb = []
      state.nowOpen = []
      state.nowTab = '/home'
      router.push('/home')
      this._vm.VueCookie.delete('SYS-PSYLIFE-LINK')
      this._vm.VueCookie.delete('SYS-PSYLIFE-TABLIST')
    },

    // 添加tab
    addTabs (state, key) {
      let menu = this.state.login.Menu
      for (let i = 0; i < menu.length; i++) {
        const element = menu[i]
        for (const k in element.nameBox) {
          if (element.nameBox.hasOwnProperty(k)) {
            const e = element.nameBox[k]
            if (e.link === key) {
              this._vm.utils.addNewTabs(e)
              this._vm.VueCookie.set('SYS-PSYLIFE-LINK', JSON.stringify(e.link))
            }
          }
        }
      }
    },
    // 关闭tab
    removeTabs (state, item) {
      state.tabList = item
      let isBool = true
      let active = JSON.parse(this._vm.VueCookie.get('SYS-PSYLIFE-LINK'))
      item.forEach(element => {
        if (element.link === active) {
          isBool = false
        }
      })

      if (isBool) {
        this._vm.utils.addNewTabs(item[item.length - 1])
      }
    },
    // 默认tab
    defaultTabList (state, item) {
      state.tabList = item
    }
  }
}
