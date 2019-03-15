import router from '../../router'
import store from './../../store'

export default {
  // 添加路由
  addNewRouter (data, routers) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      let now = Object.assign({}, item)
      now.component = () => import(`src/${item.component}`)
      if (now.children) {
        now.children = []
        this.addNewRouter(item.children, now.children)
      }
      routers.push(now)
    }
  },

  // 添加标签
  addNewTabs (key) {
    if (key.link) {
      let isBool = true
      let tab = store.state.home
      let menu = store.state.login.Menu

      if (tab.tabList.length >= 1) {
        for (let i = 0; i < tab.tabList.length; i++) {
          const element = tab.tabList[i]
          if (element.link === key.link) {
            isBool = false
          }
        }
      }

      if (isBool) {
        tab.tabList.push(key)
      }
      if (key.key_object) {
        router.push({
          path: key.link,
          query: {
            key_object: JSON.stringify(key.key_object)
          }
        })
      } else {
        router.push(key.link)
      }

      for (let i = 0; i < menu.length; i++) {
        const element = menu[i]
        for (const k in element.nameBox) {
          if (element.nameBox.hasOwnProperty(k)) {
            const e = element.nameBox[k]
            if (e.link === key.link) {
              tab.breadcrumb = [element.title, e.title]
              tab.nowOpen = [i + 1]
              tab.nowTab = key.link
            }
          }
        }
      }
    }
  },
  closeTabs (key) {
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

    if (key) {
      tab.dispatch('addTabs', key)
    }
  }
}
