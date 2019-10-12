// import api from 'assets/js/api'
import router from 'src/router'

const state = {
  // 导航
  HomeMenuList: [
    {
      label: '文章管理',
      name: 1
    },
    {
      label: '用户管理',
      name: 2,
      icon: 'ios-baseball',
      children: [
        {
          label: '新增用户',
          name: '2-1'
        },
        {
          label: '活跃用户',
          name: '2-2'
        }
      ]
    },
    {
      label: '统计分析',
      name: 3,
      icon: 'md-baseball',
      children: [
        {
          label: '使用',
          name: '3-1',
          icon: 'ios-basketball',
          children: [
            {
              label: '新增和启动',
              name: '3-1-1',
              icon: 'md-basketball',
              children: [
                {
                  label: '新增',
                  name: '3-1-1-1'
                },
                {
                  label: '启动',
                  name: '3-1-1-2',
                  icon: 'ios-baseball',
                  children: [
                    {
                      label: '准备',
                      name: '3-1-1-2-1'
                    }
                  ]
                }
              ]
            },
            {
              label: '活跃分析',
              name: '3-1-2'
            },
            {
              label: '时段分析',
              name: '3-1-3'
            }
          ]
        },
        {
          label: '留存',
          name: '3-2',
          icon: 'md-basketball',
          children: [
            {
              label: '用户留存',
              name: '3-2-1'
            },
            {
              label: '流失用户',
              name: '3-2-2'
            }
          ]
        }
      ]
    }
  ],
  // 面包屑
  BreadcrumbList: [
    {
      label: 'Components'
    },
    {
      label: 'Breadcrumb'
    }
  ],
  // 导航选中
  HomeMenuActive: null,
  // 导航展开
  HomeMenuOpen: []
}

const getters = {
  HomeMenuList: state => state.HomeMenuList,
  BreadcrumbList: state => state.BreadcrumbList,
  HomeMenuActive: state => state.HomeMenuActive,
  HomeMenuOpen: state => state.HomeMenuOpen
}

const actions = {
  GoHome ({ commit }) {
    commit('GoHome')
  },
  HomeMenuSelect ({ commit }, key) {
    commit('HomeMenuSelect', key)
  }
}

const mutations = {
  // 跳转首页
  GoHome (state) {
    state.HomeMenuActive = null
    state.HomeMenuOpen = []
    router.push('/')
  },
  // 导航跳转
  HomeMenuSelect (state, key) {
    console.log(key)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
