<template>
  <div class="page">
    <table-tree :loading="loading" border :columns="columns" :data="authorList"></table-tree>
    <div class="page-box">
      <page-box :total="20" @on-change="changePage"></page-box>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page2',
  data () {
    return {
      loading: false,
      columns: [
        {
          title: '名称',
          key: 'title',
          width: 200
        },
        {
          title: '方法',
          key: 'class'
        },
        {
          title: '组件',
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
      ],
      authorList: [
        {
          title: '权限',
          level: '0',
          class: 'home',
          component: 'home',
          expand: true,
          children: [
            {
              title: '内容管理',
              level: '1',
              class: 'home',
              component: 'content',
              expand: true,
              children: [
                {
                  title: '查数据',
                  level: '2',
                  class: 'content',
                  component: 'search-data',
                  expand: true,
                  children: [
                    {
                      title: '管理人',
                      level: '3',
                      class: 'home/content/search-data',
                      component: 'manage-people',
                      expand: true
                    }
                  ]
                },
                {
                  title: '最新资讯',
                  level: '2',
                  class: 'home/content',
                  component: 'now-news',
                  expand: true
                }
              ]
            },
            {
              title: '用户管理',
              level: '1',
              class: 'home',
              component: 'people-manage',
              expand: true,
              children: [
                {
                  title: '获取用户列表',
                  level: '3',
                  class: 'Admin',
                  component: null,
                  expand: true
                }
              ]
            },
            {
              title: '填报模版维护',
              level: '1',
              class: 'home',
              component: 'template-maintain',
              expand: true
            }
          ]
        },
        {
          title: '权限页面',
          level: '0',
          class: 'home1',
          component: 'home1',
          expand: true
        }
      ]
    }
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
