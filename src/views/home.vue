<template>
  <Layout class="layout">
    <Sider hide-trigger collapsible ref="vueside" width="250px" :collapsed-width="78" class="left">
      <div class="logo" @click="goHomes"><p>管理平台</p></div>

      <Menu theme="dark" accordion ref="vueadmin" width="auto" @on-select="addTabs" :active-name="nowTab" :open-names="nowOpen">
        <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
        <Submenu v-for="(item,index) in Menu" :key="index" :name="index" v-if="item.children">
          <template slot="title"><Icon :type="item.icon" /><span class="left-name-box">{{item.title}}</span></template>
          <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
          <Submenu v-for="(li,val) in item.children" :key="index+'-'+val" :name="index+'-'+val" v-if="li.children">
            <template slot="title"><Icon :type="li.icon" /><span class="left-name-box">{{li.title}}</span></template>
            <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
            <Submenu v-for="(i,v) in li.children" :key="index+'-'+val+'-'+v" :name="index+'-'+val+'-'+v" v-if="i.children">
              <template slot="title"><Icon :type="i.icon" /><span class="left-name-box">{{i.title}}</span></template>
              <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
              <Submenu v-for="(s,sv) in i.children" :key="index+'-'+val+'-'+v+'-'+sv" :name="index+'-'+val+'-'+v+'-'+sv" v-if="s.children">
                <template slot="title"><Icon :type="s.icon" /><span class="left-name-box">{{s.title}}</span></template>
                <MenuItem v-for="ss in s.children" :key="ss.link" :name="ss.link">
                  <Icon :type="ss.icon" />{{ss.title}}
                </MenuItem>
              </Submenu>
              <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
              <MenuItem v-for="a in i.children" :key="a.link" :name="a.link" v-if="a.link">
                <Icon :type="a.icon" />{{a.title}}
              </MenuItem>
            </Submenu>
            <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
            <MenuItem v-for="i in li.children" :key="i.link" :name="i.link" v-if="i.link">
              <Icon :type="i.icon" />{{i.title}}
            </MenuItem>
          </Submenu>
          <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
          <MenuItem v-for="li in item.children" :key="li.link" :name="li.link" v-if="li.link">
            <Icon :type="li.icon" />{{li.title}}
          </MenuItem>
        </Submenu>
        <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
        <MenuItem v-for="item in Menu" :key="item.link" :name="item.link" v-if="item.link">
          <Icon :type="item.icon" />{{item.title}}
        </MenuItem>
      </Menu>
    </Sider>

    <Content class="right">
      <div class="header">
        <div class="header-left">
          <Icon type="md-menu" size="24"  />
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem v-for="li in breadcrumb" :key="li">{{li}}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Dropdown @on-click="sysClick" class="namebox">
          <div class="name"><Icon class="icon" type="ios-contact"></Icon>{{people.name}}</div>
          <DropdownMenu slot="list">
            <DropdownItem class="box" v-for="li in dropdownList" :key="li.id" :name="li.key">{{li.title}}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <label-box :list="tabList" :active="nowTab"  @on-click="addTabs" @on-close="closeTab"></label-box>

      <div class="content">
        <div class="main-box">
          <keep-alive :include="keepAlive">
            <router-view v-if="samePage" />
          </keep-alive>
        </div>
      </div>
    </Content>
  </Layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      dropdownList: [
        {
          id: 1,
          key: 'exit',
          title: '退出'
        }
      ],
      samePage: true,
      keepAlive: []
    }
  },
  computed: {
    ...mapGetters([
      'people',
      'Menu',
      'tabList',
      'nowOpen',
      'nowTab',
      'breadcrumb'
    ])
  },
  methods: {
    ...mapActions([
      'exit',
      'addTabs',
      'removeTabs',
      'defaultTabList',
      'goHome',
      'userInfo'
    ]),
    collapsedSider () {
      this.$refs.vueside.toggleCollapse()
    },
    // 默认效果
    init () {
      let tabList = JSON.parse(this.VueCookie.get('TABLIST'))
      let active = this.VueCookie.get('LINK')
      if (tabList) {
        this.defaultTabList(tabList)
        if (active) {
          this.addTabs(active)
        }
      } else {
        this.goHome()
      }
    },
    // 切换左道航
    refresh () {
      this.$nextTick(() => {
        this.$refs.vueadmin.updateOpened()
        this.$refs.vueadmin.updateActiveName()
      })
    },
    goHomes () {
      this.goHome()
      this.keepAlive = []
    },
    // 关闭
    closeTab (item) {
      if (item.length) {
        this.removeTabs(item)
      } else {
        this.goHome()
        this.keepAlive = []
      }
    },
    // 系统设置
    sysClick (e) {
      if (e === 'exit') {
        this.exit()
      }
      if (e === 'revamp') {
        this.$router.push('/revamp')
      }
    },
    // tab页面存储
    updateTabList (val) {
      this.keepAlive = []
      this.VueCookie.set('TABLIST', JSON.stringify(val))

      let loseList = []
      let routeList = []
      let route = this.$router.options.routes
      for (let i = 0; i < route.length; i++) {
        const element = route[i]
        if (element.name === 'home') {
          routeList = element.children
        }
      }
      for (let i = 0; i < routeList.length; i++) {
        const element = routeList[i]
        if (element.meta) {
          if (element.meta.keepAlive) {
            loseList.push(element.name)
          }
        }
      }

      for (let i = 0; i < val.length; i++) {
        const element = val[i].name
        if (loseList.indexOf(element) === -1) {
          this.keepAlive.push(element)
        }
      }

      let list = Array.from(new Set(this.keepAlive))
      this.keepAlive = list
    },
    updateRoute (val) {
      let list = this.keepAlive
      if (list.indexOf(val.name) === -1) {
        this.samePage = false
        this.$nextTick(() => {
          this.samePage = true
        })
      }
    }
  },
  created () {
    document.title = '管理平台'
    this.init()
    // 获取用户信息
    this.userInfo()
  },
  watch: {
    nowOpen: 'refresh',
    tabList: {
      handler: 'updateTabList',
      deep: true
    },
    $route: {
      handler: 'updateRoute',
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.logo {
  display: flex;
  width: 100%;
  height: 60px;
  margin: 10px 0;
  cursor: pointer;
  user-select: none;

  align-items: center;
  justify-content: center;
  p {
    font-size: 22px;
    font-weight: bold;
    padding: 2px 10px;
    color: #fff;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    background-color: #2d8cf0;
  }
}
.left {
  z-index: 2;
  overflow: auto;
  background-color: #001529;
  .ivu-menu-dark {
    background-color: #001529;
  }
  .left-name-box {
    display: inline-block;
    width: 70%;
    vertical-align: top;
  }
}
.right {
  position: relative;
  background-color: #f5f7f9;
  .header {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    padding: 14px 20px;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;

    justify-content: space-between;
    .header-left {
      display: flex;
      flex-direction: row;
      width: 80%;

      align-items: center;
      i {
        margin-right: 20px;
        cursor: pointer;
      }
    }
    .namebox {
      font-size: 14px;
      cursor: pointer;
      .name {
        display: flex;
        flex-direction: row;

        align-items: center;
        .icon {
          font-size: 20px;
          margin-top: -4px;
          margin-right: 10px;
        }
        .ivu-icon {
          vertical-align: middle;
        }
      }
      .box {
        text-align: center;
      }
    }
  }
  .content {
    overflow: hidden;
    box-sizing: border-box;
    height: 86vh;
    margin: 20px;
    margin-bottom: 0;
    border: 1px solid #e8eaec;
    border-radius: 4px;
    background-color: #fff;
    .main-box {
      font-size: 14px;
      overflow-y: auto;
      box-sizing: border-box;
      height: 100%;
      margin: 20px;
      padding-right: 10px;
    }
  }
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
  background: rgba(80, 90, 109, .3);
}
</style>
