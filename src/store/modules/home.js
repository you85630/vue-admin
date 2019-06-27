import router from 'src/router'

const state = {
  // tab导航
  tabList: [],
  // 当前面包屑
  breadcrumb: [],
  // 当前展开
  nowOpen: [],
  // 当前页面
  nowTab: ''
}

const getters = {
  tabList: state => state.tabList,
  breadcrumb: state => state.breadcrumb,
  nowOpen: state => state.nowOpen,
  nowTab: state => state.nowTab
}

const actions = {
  // 跳转主页
  goHome ({ commit }) {
    commit('goHome')
  },
  // 添加tab
  addTabs ({ commit }, key) {
    commit('addTabs', key)
  },
  // 关闭tab
  removeTabs ({ commit }, key) {
    commit('removeTabs', key)
  },
  // 默认tab
  defaultTabList ({ commit }, key) {
    commit('defaultTabList', key)
  }
}

const mutations = {
  goHome (state) {
    state.tabList = []
    state.breadcrumb = []
    state.nowOpen = []
    router.push(state.nowTab)
    this._vm.VueCookie.remove('link')
    this._vm.VueCookie.remove('tablist')
    state.nowTab = '/home'
  },

  addTabs (state, key) {
    let isBool = true
    let nowKey
    let menu = this.getters.Menu
    if (key.constructor === String) {
      nowKey = this._vm.utils.cycleList(menu, key)
    } else {
      nowKey = key
    }

    if (state.tabList.length) {
      for (let i = 0; i < state.tabList.length; i++) {
        const element = state.tabList[i]
        if (element.link === nowKey.link) {
          isBool = false
        }
      }
    }

    // 新页面添加
    if (isBool) {
      state.tabList.push(nowKey)
    }

    // 页面传递参数
    if (nowKey.options) {
      router.push({
        path: nowKey.link,
        query: {
          options: JSON.stringify(nowKey.options)
        }
      })
    } else {
      router.push(nowKey.link)
    }

    // 导航
    state.breadcrumb = nowKey.breadcrumb
    state.nowOpen = nowKey.open
    state.nowTab = nowKey.link
    document.title = nowKey.title

    // 存储当前选中
    this._vm.VueCookie.set('link', nowKey)
  },

  removeTabs (state, item) {
    state.tabList = item
    let isBool = true
    let active = this._vm.VueCookie.get('link').link
    item.forEach(element => {
      if (element.link === active) {
        isBool = false
      }
    })

    if (isBool) {
      this._vm.utils.addNewTabs(item[item.length - 1])
    }
  },

  defaultTabList (state, item) {
    state.tabList = item
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
