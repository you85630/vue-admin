<template>
  <div class="tree">
    <tree :columns="title" :data="list"></tree>
  </div>
</template>

<script>
import tree from './table-tree/tree'
export default {
  components: {
    tree
  },
  name: 'treelist',
  data () {
    return {
      title: [
        {
          name: '名称',
          key: 'title',
          width: 400
        },
        {
          name: '控制器名',
          key: 'component'
        },
        {
          name: '方法名',
          key: 'method'
        },
        {
          name: '组件',
          key: 'class'
        },
        {
          name: '操作',
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
                  }
                }
              }, '删除')
            ])
          }
        }
      ],
      list: [
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
                    },
                    {
                      'right_id': '5',
                      'title': '基金产品',
                      'level': '3',
                      'class': 'home/content/search-data',
                      'method': 'fund-product',
                      'component': 'fund-product',
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
                  'right_id': '6',
                  'title': '查文库',
                  'level': '2',
                  'class': 'home/content',
                  'method': 'search-library',
                  'component': 'search-library',
                  'icons': '',
                  'format': '1',
                  'is_show': '1',
                  'is_login': '1',
                  'expand': true,
                  'checked': true
                },
                {
                  'right_id': '7',
                  'title': '维护分类',
                  'level': '2',
                  'class': 'home/content',
                  'method': 'maintain-classify',
                  'component': 'maintain-classify',
                  'icons': '',
                  'format': '1',
                  'is_show': '1',
                  'is_login': '1',
                  'expand': true,
                  'checked': true
                },
                {
                  'right_id': '8',
                  'title': '查词条',
                  'level': '2',
                  'class': 'home/content',
                  'method': 'search-word',
                  'component': 'search-word',
                  'icons': '',
                  'format': '1',
                  'is_show': '1',
                  'is_login': '1',
                  'expand': true,
                  'checked': true
                },
                {
                  'right_id': '9',
                  'title': '提交内容审核',
                  'level': '2',
                  'class': 'home/content',
                  'method': 'submit-content-audit',
                  'component': 'submit-content-audit',
                  'icons': '',
                  'format': '1',
                  'is_show': '1',
                  'is_login': '1',
                  'expand': true,
                  'checked': true
                },
                {
                  'right_id': '10',
                  'title': '查法规',
                  'level': '2',
                  'class': 'home/content',
                  'method': 'search-statute',
                  'component': 'search-statute',
                  'icons': '',
                  'format': '1',
                  'is_show': '1',
                  'is_login': '1',
                  'expand': true,
                  'checked': true
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
              'right_id': '14',
              'title': '系统管理',
              'level': '1',
              'class': 'home',
              'method': '#',
              'component': 'jurisdiction-manage',
              'icons': '',
              'format': '1',
              'is_show': '1',
              'is_login': '1',
              'expand': true,
              'checked': true,
              'children': [
                {
                  'right_id': '19',
                  'title': '权限管理',
                  'level': '2',
                  'class': 'jurisdiction-manage',
                  'method': 'controlAuthor',
                  'component': 'controlAuthor',
                  'icons': 'ios-list-box-outline',
                  'format': '1',
                  'is_show': '1',
                  'is_login': '1',
                  'expand': true,
                  'checked': true,
                  'children': [
                    {
                      'right_id': '23',
                      'title': '获取权限列表',
                      'level': '3',
                      'class': 'Admin',
                      'method': 'getAllMenuList',
                      'component': null,
                      'icons': '',
                      'format': '2',
                      'is_show': '2',
                      'is_login': '2',
                      'expand': true,
                      'checked': true
                    },
                    {
                      'right_id': '24',
                      'title': '增加权限',
                      'level': '3',
                      'class': 'Admin',
                      'method': 'addMenu',
                      'component': null,
                      'icons': '',
                      'format': '2',
                      'is_show': '2',
                      'is_login': '2',
                      'expand': true,
                      'checked': true
                    },
                    {
                      'right_id': '25',
                      'title': '编辑权限',
                      'level': '3',
                      'class': 'Admin',
                      'method': 'editMenu',
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
                  'right_id': '20',
                  'title': '角色管理',
                  'level': '2',
                  'class': 'jurisdiction-manage',
                  'method': 'controlRole',
                  'component': 'controlRole',
                  'icons': 'ios-list-box-outline',
                  'format': '1',
                  'is_show': '1',
                  'is_login': '1',
                  'expand': true,
                  'checked': true,
                  'children': [
                    {
                      'right_id': '27',
                      'title': '新增角色',
                      'level': '3',
                      'class': 'Admin',
                      'method': 'addRole',
                      'component': null,
                      'icons': '',
                      'format': '2',
                      'is_show': '2',
                      'is_login': '2',
                      'expand': true,
                      'checked': true
                    },
                    {
                      'right_id': '28',
                      'title': '编辑角色',
                      'level': '3',
                      'class': 'Admin',
                      'method': 'editRole',
                      'component': null,
                      'icons': '',
                      'format': '2',
                      'is_show': '2',
                      'is_login': '2',
                      'expand': true,
                      'checked': true
                    },
                    {
                      'right_id': '29',
                      'title': '更新角色权限',
                      'level': '3',
                      'class': 'Admin',
                      'method': 'editRoleControl',
                      'component': null,
                      'icons': '',
                      'format': '2',
                      'is_show': '2',
                      'is_login': '2',
                      'expand': true,
                      'checked': true
                    },
                    {
                      'right_id': '30',
                      'title': '获取角色权限列表',
                      'level': '3',
                      'class': 'Admin',
                      'method': 'getRoleControl',
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
                  'right_id': '21',
                  'title': '用户管理',
                  'level': '2',
                  'class': 'jurisdiction-manage',
                  'method': 'controlUser',
                  'component': 'controlUser',
                  'icons': 'ios-list-box-outline',
                  'format': '1',
                  'is_show': '1',
                  'is_login': '1',
                  'expand': true,
                  'checked': true
                },
                {
                  'right_id': '22',
                  'title': '修改密码',
                  'level': '2',
                  'class': 'jurisdiction-manage',
                  'method': 'updatePwd',
                  'component': 'updatePwd',
                  'icons': 'ios-list-box-outline',
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
                },
                {
                  'right_id': '32',
                  'title': '编辑用户信息',
                  'level': '3',
                  'class': 'Admin',
                  'method': 'updateAdmin',
                  'component': null,
                  'icons': '',
                  'format': '2',
                  'is_show': '2',
                  'is_login': '2',
                  'expand': true,
                  'checked': true
                },
                {
                  'right_id': '33',
                  'title': '修改用户密码',
                  'level': '3',
                  'class': 'Admin',
                  'method': 'updateAdminPass',
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
              'right_id': '16',
              'title': '订单管理',
              'level': '1',
              'class': 'home',
              'method': 'order-manage',
              'component': 'order-manage',
              'icons': '',
              'format': '1',
              'is_show': '1',
              'is_login': '1',
              'expand': true,
              'checked': true
            },
            {
              'right_id': '17',
              'title': '我的任务',
              'level': '1',
              'class': 'home',
              'method': 'my-task',
              'component': 'my-task',
              'icons': '',
              'format': '1',
              'is_show': '1',
              'is_login': '1',
              'expand': true,
              'checked': true
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
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
