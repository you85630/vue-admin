<template>
  <div id="app" v-cloak>
    <router-view />
    <!-- 返回顶部 -->
    <BackTop></BackTop>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  mounted () {
    this.getRouter()
  },
  methods: {
    ...mapActions([
      'getRouter'
    ]),
    change (val) {
      // let name = val.name
      // let router = this.$router
      // // 如果路由内无此名字，跳转到404
      // if (!name) {
      //   router.push('/404')
      // }
      // let token = JSON.parse(this.VueCookie.get('SYS-PSYLIFE-USER'))
      // // 如果无token，跳转登录页
      // if (!token) {
      //   router.push('/login')
      // } else {
      //   // 如果已登录，不允许跳转到登录页
      //   if (router.currentRoute.path === '/login') {
      //     router.go(-1)
      //   }
      // }
    }
  },
  watch: {
    '$route': 'change'
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-size: 0;
  line-height: 1.5;
}
[v-cloak] {
  display: none;
}
</style>
