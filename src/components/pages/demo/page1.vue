<template>
  <div class="page">
    <p><Button @click="closeTab">关闭当前</Button></p>
    <br>
    <p><Button @click="addTab">关闭当前，跳转page2</Button></p>
    <br>
    <p><Button @click="addTab1">新建多页面page3-2</Button></p>
    <br>
    <Page :total="100" :current="page" show-sizer show-elevator @on-change="changePage" @on-page-size-change="changePageSize" />
    <br>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
    <Button type="primary" @click="search">搜索</Button>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      value: '',
      page: 1
    }
  },
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
    },

    search () {
      this.page = 1
    },
    changePage (e) {
      this.page = e
    },
    changePageSize () {
      this.page = 1
    }
  }
}
</script>

<style>
.page {
  font-size: 14px;
}
</style>
