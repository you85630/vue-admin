import Vue from 'vue'
import Router from 'vue-router'
import VueCookie from 'vue-cookies'
Vue.use(Router)

// keepAlive: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致

// 权限
const admin1 = [1]
const admin2 = [2]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '*',
      name: '404',
      component: () => import('views/notFound'),
      meta: {
        title: '404'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('views/home'),
      meta: {
        requireAuth: admin1
      },
      children: [
        {
          path: '/home/page1',
          name: 'page1',
          component: () => import('components/pages/demo/page1'),
          meta: {
            requireAuth: admin1,
            title: '页面1'
          }
        },
        {
          path: '/home/page2',
          name: 'page2',
          component: () => import('components/pages/demo/page2'),
          meta: {
            requireAuth: admin1,
            title: '页面2'
          }
        },
        {
          path: '/home/page3/:id',
          name: 'page3',
          component: () => import('components/pages/demo/page3'),
          meta: {
            requireAuth: admin1,
            keepAlive: true,
            title: '页面3'
          }
        },
        {
          path: '/home/page4',
          name: 'page4',
          component: () => import('components/pages/demo/page4'),
          meta: {
            requireAuth: admin2,
            title: '页面4'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let login = VueCookie.get('USER')
  // 是否需要登录
  let requireAuth = to.meta.requireAuth

  if (requireAuth) {
    // 未登录
    if (!login) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      if (requireAuth.indexOf(parseInt(login.user_id)) === -1) {
        next({
          path: '/login',
          query: { redirect: from.fullPath }
        })
      }
    }
  }
  next()
})

export default router
