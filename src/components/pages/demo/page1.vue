<template>
  <div class="page">
    <p><Button @click="closeTab">关闭当前</Button></p>
    <br>
    <p><Button @click="addTab">关闭当前，跳转page2</Button></p>
    <br>
    <p><Button @click="addTab1">新建多页面page3-2</Button></p>
    <br>
  </div>
</template>

<script>
export default {
  name: 'page1',
  methods: {
    closeTab () {
      this.utils.closeTabs()
    },

    addTab () {
      this.utils.closeTabs()
      let key = {
        breadcrumb: ['新建的', '页面2'],
        open: [0],
        title: '页面2',
        link: '/home/page2',
        name: 'page2'
      }
      this.utils.addNewTabs(key)
    },

    addTab1 () {
      let key = {
        breadcrumb: ['新建的', '页面3'],
        open: [1],
        title: '页面3',
        link: '/home/page3/2',
        name: 'page3',
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
.page {
  font-size: 14px;
}
</style>
