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
  // 判断页面是否是移动端
  judge ({ commit }) {
    commit('judge')
  },
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
  judge (state) {
    let wid = document.body.clientWidth
    let userAgentInfo = navigator.userAgent
    let Agents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod'
    ]
    let flag = true

    for (const key in Agents) {
      if (Agents.hasOwnProperty(key)) {
        const element = Agents[key]
        if (userAgentInfo.indexOf(element) > 0) {
          flag = false
          break
        }
      }
    }

    // PC端
    if (flag) {
      if (wid <= 920) {
        state.mobile = true
      } else {
        state.mobile = false
      }
    } else {
      // 移动端
      if (wid <= 414) {
        state.mobile = true
      } else {
        state.mobile = false
      }
    }
  },
  goHome (state) {
    state.tabList = []
    state.breadcrumb = []
    state.nowOpen = []
    state.nowTab = '/home'
    router.push('/home')
    this._vm.VueCookie.delete('link')
    this._vm.VueCookie.delete('tablist')
    document.title = '管理平台'
  },

  addTabs (state, key) {
    let isBool = true
    let nowKey
    let menu = this.getters.Menu
    if (key.constructor === String) {
      for (let i = 0; i < menu.length; i++) {
        const element = menu[i]
        for (const k in element.nameBox) {
          if (element.nameBox.hasOwnProperty(k)) {
            const e = element.nameBox[k]
            if (e.link === key) {
              nowKey = {
                breadcrumb: [element.title, e.title],
                open: [i + 1],
                link: e.link,
                title: e.title
              }
            }
          }
        }
      }
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
    this._vm.VueCookie.set('link', JSON.stringify(nowKey))
  },

  removeTabs (state, item) {
    state.tabList = item
    let isBool = true
    let active = JSON.parse(this._vm.VueCookie.get('link')).link
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
