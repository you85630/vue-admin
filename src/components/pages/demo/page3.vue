<template>
  <div class="page">
      <menu-box :data="menuList" :active="select" @success="getActive"></menu-box>
  </div>
</template>

<script>
export default {
  name: 'page3',
  data () {
    return {
      menuList: [
        {
          icon: 'md-cog',
          title: '权限管理',
          name: 'jurisdiction-manage',
          link: '/home/jurisdiction-manage',
          select: false,
          level: 0
        },
        {
          icon: 'md-people',
          title: '用户管理',
          expand: false,
          level: 0,
          children: [
            {
              icon: 'ios-funnel',
              title: '提交内容审核',
              name: 'submit-content-audit',
              link: '/home/content/submit-content-audit',
              select: false,
              level: 1
            },
            {
              icon: 'md-document',
              title: '查文库',
              name: 'search-library',
              link: '/home/content/search-library',
              select: false,
              level: 1
            }
          ]
        },
        {
          icon: 'md-clipboard',
          title: '内容管理',
          expand: false,
          level: 0,
          children: [
            {
              icon: 'md-filing',
              title: '维护分类',
              name: 'maintain-classify',
              link: '/home/content/maintain-classify',
              select: false,
              level: 1
            },
            {
              icon: 'md-analytics',
              title: '查数据',
              expand: false,
              level: 1,
              children: [
                {
                  icon: 'md-person',
                  title: '管理人',
                  name: 'manage-people',
                  link: '/home/content/search-data/manage-people',
                  select: false,
                  level: 2
                },
                {
                  icon: 'md-card',
                  title: '产品',
                  name: 'fund-product',
                  link: '/home/content/search-datacontent/fund-product',
                  select: false,
                  level: 2
                }
              ]
            },
            {
              icon: 'md-notifications',
              title: '最新资讯',
              name: 'now-news',
              link: '/home/content/now-news',
              select: false,
              level: 1
            }
          ]
        },
        {
          icon: 'md-cash',
          title: '订单管理',
          name: 'order-manage',
          expand: false,
          level: 0,
          children: [
            {
              icon: 'md-list-box',
              title: '查词条',
              name: 'search-word',
              link: '/home/content/search-word',
              select: false,
              level: 1
            },
            {
              icon: 'ios-paper',
              title: '查法规',
              name: 'search-statute',
              link: '/home/content/search-statute',
              select: false,
              level: 1
            }
          ]
        },
        {
          icon: 'md-bulb',
          title: '我的任务',
          name: 'my-task',
          link: '/home/my-task',
          select: false,
          level: 0
        },
        {
          icon: 'md-construct',
          title: '填报模板维护',
          name: 'template-maintain',
          link: '/home/template-maintain',
          select: false,
          level: 0
        }
      ],
      select: '/home/people-manage'
    }
  },
  methods: {
    getActive (key) {
      this.select = key
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  font-size: 20px;
  display: flex;
  flex-direction: row;
  .active {
    font-size: 14px;
  }
}
</style>
