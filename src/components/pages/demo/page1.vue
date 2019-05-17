<template>
  <div class="page">
    <p><Button @click="closeTab">关闭当前</Button></p>
    <br>
    <p><Button @click="addTab">关闭当前，跳转page2</Button></p>
    <br>
    <p><Button @click="addTab2">新建多页面page3</Button></p>
  </div>
</template>

<script>
export default {
  methods: {
    closeTab () {
      this.utils.closeTabs()
    },

    addTab () {
      this.utils.closeTabs()
      let key = {
        breadcrumb: ['新建的', '页面2'],
        open: [2],
        title: '页面2',
        link: '/home/page2'
      }
      this.utils.addNewTabs(key)
    },

    addTab2 () {
      let key = {
        breadcrumb: ['新建的', '页面3'],
        open: [2],
        title: '页面3',
        link: '/home/page3',
        options: {
          pege: 1,
          key: 1
        }
      }
      this.utils.addNewTabs(key)
    }
  }
}
</script>

<style>
.page{
  font-size: 20px;
}
</style>
