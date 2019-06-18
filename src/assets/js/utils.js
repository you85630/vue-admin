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
  },

  // 循环遍历导航
  cycleList (list, key) {
    let data = {}
    for (let i = 0; i < list.length; i++) {
      const element = list[i]
      if (element.link === key) {
        data = {
          breadcrumb: [element.title],
          link: element.link,
          title: element.title,
          name: element.name
        }
      } else {
        let two = element.children
        if (two) {
          for (let j = 0; j < two.length; j++) {
            const e = two[j]
            if (e.link === key) {
              data = {
                breadcrumb: [element.title, e.title],
                open: [i],
                link: e.link,
                title: e.title,
                name: e.name
              }
            } else {
              let three = e.children
              if (three) {
                for (let a = 0; a < three.length; a++) {
                  const b = three[a]
                  if (b.link === key) {
                    data = {
                      breadcrumb: [element.title, e.title, b.title],
                      open: [i, i + '-' + j],
                      link: b.link,
                      title: b.title,
                      name: b.name
                    }
                  } else {
                    let four = b.children
                    if (four) {
                      for (let c = 0; c < four.length; c++) {
                        const d = four[c]
                        if (d.link === key) {
                          data = {
                            breadcrumb: [element.title, e.title, b.title, d.title],
                            open: [i, i + '-' + j, i + '-' + j + '-' + a],
                            link: d.link,
                            title: d.title,
                            name: d.name
                          }
                        } else {
                          let five = d.children
                          if (five) {
                            for (let f = 0; f < five.length; f++) {
                              const g = five[f]
                              if (g.link === key) {
                                data = {
                                  breadcrumb: [element.title, e.title, b.title, d.title, g.title],
                                  open: [i, i + '-' + j, i + '-' + j + '-' + a, i + '-' + j + '-' + a + '-' + c],
                                  link: g.link,
                                  title: g.title,
                                  name: g.name
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return data
  }
}
