// import api from 'src/assets/js/api'
import router from 'src/router'

const state = {
  //  左导航
  Menu: [
    {
      icon: 'md-bulb',
      title: '页面1名字名字名字名字名字名字',
      children: [
        {
          icon: 'md-browsers',
          title: 'page3-4',
          name: 'page3',
          link: '/home/page3/4'
        },
        {
          icon: 'md-body',
          title: 'page111名字名字名字名字名字名字',
          children: [
            {
              icon: 'md-albums',
              title: 'page1',
              name: 'page1',
              link: '/home/page1'
            },
            {
              icon: 'md-browsers',
              title: 'page2名字名字名字名字名字名字',
              name: 'page2',
              link: '/home/page2',
              children: [
                {
                  icon: 'md-bookmark',
                  title: 'page3-6名字名字名字名字名字名字',
                  name: 'page3',
                  link: '/home/page3/6',
                  children: [
                    {
                      icon: 'md-bookmark',
                      title: 'page3-8名字名字名字名字名字名字',
                      name: 'page3',
                      link: '/home/page3/8'
                    },
                    {
                      icon: 'md-bookmark',
                      title: 'page3-9',
                      name: 'page3',
                      link: '/home/page3/9'
                    },
                    {
                      icon: 'md-bookmark',
                      title: 'page3-10',
                      name: 'page3',
                      link: '/home/page3/10'
                    },
                    {
                      icon: 'md-bookmark',
                      title: 'page3-11',
                      name: 'page3',
                      link: '/home/page3/11'
                    }
                  ]
                },
                {
                  icon: 'md-bookmark',
                  title: 'page3-7',
                  name: 'page3',
                  link: '/home/page3/7'
                }
              ]
            }
          ]
        },
        {
          icon: 'md-bookmark',
          title: 'page3-3',
          name: 'page3',
          link: '/home/page3/3'
        }
      ]
    },
    {
      icon: 'md-alarm',
      title: '页面2',
      children: [
        {
          icon: 'md-desktop',
          title: 'page3-1',
          name: 'page3',
          link: '/home/page3/1'
        },
        {
          icon: 'md-document',
          title: 'page4名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字',
          name: 'page4',
          link: '/home/page4'
        }
      ]
    },
    {
      icon: 'md-alert',
      title: '页面3-5名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字名字',
      name: 'page3',
      link: '/home/page3/5'
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
    this._vm.VueCookie.set('user', state.people)
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
    this._vm.VueCookie.remove('user')
    this._vm.VueCookie.remove('link')
    this._vm.VueCookie.remove('tablist')
  },

  // 获取用户信息
  userInfo (state) {
    state.user = this._vm.VueCookie.get('user')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
