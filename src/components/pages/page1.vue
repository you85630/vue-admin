<template>
  <div class="page">
    <table-tree :loading="loading" border :columns="columns" :data="HomeMenuList"></table-tree>
    <div class="page-box">
      <page-box :total="100" @on-change="changePage"></page-box>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'page1',
  data () {
    return {
      loading: false,
      columns: [
        {
          title: '名称',
          key: 'label',
          width: 200
        },
        {
          title: '路由',
          key: 'link'
        },
        {
          title: '说明',
          key: 'component'
        },
        {
          title: '操作',
          key: 'action',
          width: 180,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'success',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    console.log(params.row)
                  }
                }
              }, '新增'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    console.log(params.row)
                  }
                }
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    console.log(params.row)
                  }
                }
              }, '删除')
            ])
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'HomeMenuList'
    ])
  },
  methods: {
    changePage (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  font-size: 20px;
  .page-box {
    padding-top: 20px;
    text-align: center;
  }
}
</style>
