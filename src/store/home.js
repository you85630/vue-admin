// import api from 'assets/js/api'
// import router from 'src/router'

const state = {
  // 导航
  HomeMenuList: [
    {
      label: '用户管理',
      icon: 'ios-baseball',
      dec: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字',
      children: [
        {
          label: '树形表格',
          link: '/page1'
        },
        {
          label: 'Echarts类型',
          link: '/page2'
        }
      ]
    },
    {
      label: '文章管理',
      icon: 'ios-basketball',
      link: '/page/1',
      dec: '文字文字文字文字文字文字文字文字'
    },
    {
      label: '统计分析',
      icon: 'md-baseball',
      children: [
        {
          label: '使用',
          icon: 'ios-basketball',
          children: [
            {
              label: '新增和启动',
              icon: 'md-basketball',
              children: [
                {
                  label: '新增',
                  link: '/page/4'
                },
                {
                  label: '启动',
                  icon: 'ios-baseball',
                  children: [
                    {
                      label: '准备',
                      link: '/page/5'
                    }
                  ]
                }
              ]
            },
            {
              label: '活跃分析',
              link: '/page/6'
            },
            {
              label: '时段分析',
              link: '/page/7'
            }
          ]
        },
        {
          label: '留存',
          icon: 'md-basketball',
          children: [
            {
              label: '用户留存',
              link: '/page/8'
            },
            {
              label: '流失用户',
              link: '/page/9',
              dec: '文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字'
            }
          ]
        }
      ]
    }
  ]
}

const getters = {
  HomeMenuList: state => state.HomeMenuList
}

const actions = {

}

const mutations = {

}

export default {
  state,
  getters,
  actions,
  mutations
}
