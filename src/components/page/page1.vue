<template>
  <div class="page">
    111
    <p><Button @click="closeTab()">关闭当前</Button></p>
    <br>
    <p><Button @click="addTab">关闭当前，跳转page3</Button></p>
    <br>
    <p><Button @click="addTab2">新建多页面1</Button></p>
    <br>
    <p><Button @click="addTab3">新建多页面2</Button></p>
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
        breadcrumb: ['新建的', '页面3'],
        open: [2],
        title: '页面3',
        link: '/home/page3'
      }
      this.utils.addNewTabs(key)
    },
    addTab2 () {
      let key = {
        breadcrumb: ['新建的', '页面4'],
        open: [2],
        title: '页面4',
        link: '/home/page4',
        options: {
          pege: 1,
          key: 1
        }
      }
      this.utils.addNewTabs(key)
    },
    addTab3 () {
      let key = {
        breadcrumb: ['新建的', '页面4'],
        open: [2],
        title: '页面4',
        link: '/home/page4',
        options: {
          pege: 2,
          key: 2
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
