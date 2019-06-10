import store from 'src/store'

export default {
  // 添加路由
  addNewRouter (data, routers) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      let now = Object.assign({}, item)
      now.component = () => import(`src/${item.component}`)
      now.meta = item.meta
      if (now.children) {
        now.children = []
        this.addNewRouter(item.children, now.children)
      }
      routers.push(now)
    }
  },

  // 添加标签
  addNewTabs (key) {
    if (key) {
      store.dispatch('addTabs', key)
    }
  },

  closeTabs () {
    let list = []
    let tab = store
    let path = tab.getters.nowTab
    let tabList = tab.getters.tabList
    for (let i = 0; i < tabList.length; i++) {
      const element = tabList[i]
      if (element.link !== path) {
        list.push(element)
      }
    }
    if (list.length) {
      tab.dispatch('removeTabs', list)
    } else {
      tab.dispatch('goHome')
    }
  }
}
