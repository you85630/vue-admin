import Vue from 'vue'
import Router from 'vue-router'
import VueCookie from 'vue-cookies'

Vue.use(Router)

const user = [1, 2, 3]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '*',
      name: 'not-found',
      component: () => import('views/notFound')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('views/login')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('views/home'),
      meta: { requireAuth: user },
      children: [
        {
          path: '/page1',
          name: 'page1',
          component: () => import('components/pages/page1'),
          meta: { requireAuth: user }
        },
        {
          path: '/page2',
          name: 'page2',
          component: () => import('components/pages/page2'),
          meta: { requireAuth: user }
        },
        {
          path: '/page/:id',
          name: 'page',
          component: () => import('components/pages/page'),
          meta: { requireAuth: user }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let login = VueCookie.get('USER')

  let requireAuth = to.meta.requireAuth
  if (requireAuth) {
    if (login) {
      if (requireAuth.indexOf(parseInt(login.user_id)) == -1) {
        next({
          path: '/login',
          query: { redirect: from.fullPath }
        })
      }
    } else { // 未登录
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

export default router
