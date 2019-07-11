<template>
  <div class="page">
    <table-tree :loading="loading" border :columns="columns" :data="authorList"></table-tree>
  </div>
</template>
<script>
export default {
  name: 'page2',
  data () {
    return {
      loading: true,
      columns: [
        {
          title: '名称',
          key: 'title',
          width: 400
        },
        {
          title: '控制器名',
          key: 'component'
        },
        {
          title: '方法名',
          key: 'method'
        },
        {
          title: '组件',
          key: 'class'
        },
        {
          title: '操作',
          key: 'action',
          width: 200,
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
                    this.editControl('新增', params.row)
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
                    this.editControl('编辑', params.row)
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
                    this.delAuthor(params.row)
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      authorList: [
        {
          'right_id': '1',
          'title': '权限',
          'level': '0',
          'class': 'home',
          'method': '#',
          'component': 'home',
          'icons': '',
          'format': '1',
          'is_show': '2',
          'is_login': '1',
          'expand': true,
          'selected': true,
          'children': [
            {
              'right_id': '2',
              'title': '内容管理',
              'level': '1',
              'class': 'home',
              'method': '#',
              'component': 'content',
              'icons': '',
              'format': '1',
              'is_show': '1',
              'is_login': '1',
              'expand': true,
              'checked': true,
              'children': [
                {
                  'right_id': '3',
                  'title': '查数据',
                  'level': '2',
                  'class': 'content',
                  'method': '#',
                  'component': 'search-data',
                  'icons': '',
                  'format': '1',
                  'is_show': '1',
                  'is_login': '1',
                  'expand': true,
                  'checked': true,
                  'children': [
                    {
                      'right_id': '4',
                      'title': '管理人',
                      'level': '3',
                      'class': 'home/content/search-data',
                      'method': 'manage-people',
                      'component': 'manage-people',
                      'icons': '',
                      'format': '1',
                      'is_show': '1',
                      'is_login': '1',
                      'expand': true,
                      'checked': true
                    }
                  ]
                },
                {
                  'right_id': '11',
                  'title': '最新资讯',
                  'level': '2',
                  'class': 'home/content',
                  'method': 'now-news',
                  'component': 'now-news',
                  'icons': '',
                  'format': '1',
                  'is_show': '1',
                  'is_login': '1',
                  'expand': true,
                  'checked': true
                }
              ]
            },
            {
              'right_id': '15',
              'title': '用户管理',
              'level': '1',
              'class': 'home',
              'method': 'people-manage',
              'component': 'people-manage',
              'icons': '',
              'format': '1',
              'is_show': '1',
              'is_login': '1',
              'expand': true,
              'checked': true,
              'children': [
                {
                  'right_id': '31',
                  'title': '获取用户列表',
                  'level': '3',
                  'class': 'Admin',
                  'method': 'getAdminList',
                  'component': null,
                  'icons': '',
                  'format': '2',
                  'is_show': '2',
                  'is_login': '2',
                  'expand': true,
                  'checked': true
                }
              ]
            },
            {
              'right_id': '18',
              'title': '填报模版维护',
              'level': '1',
              'class': 'home',
              'method': 'template-maintain',
              'component': 'template-maintain',
              'icons': '',
              'format': '1',
              'is_show': '1',
              'is_login': '1',
              'expand': true,
              'checked': true
            }
          ]
        },
        {
          'right_id': '10',
          'title': '权限页面',
          'level': '0',
          'class': 'home1',
          'method': '#',
          'component': 'home1',
          'icons': '',
          'format': '1',
          'is_show': '2',
          'is_login': '1',
          'expand': true,
          'selected': true
        }
      ]
    }
  },
  components: {
    TableTree: () => import('components/common/modules/table-tree')
  }
}
</script>

<style lang="scss" scoped>
.page{
  font-size: 20px;
}
</style>
