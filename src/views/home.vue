<template>
  <Layout class="layout">
    <Sider hide-trigger collapsible ref="sysSide" :collapsed-width="78" v-model="isCollapsed" class="left">
      <div class="logo" @click="goHome">
        <p v-if="isCollapsed">{{siteName.small}}</p>
        <p v-else>{{siteName.big}}</p>
      </div>
      <Menu theme="dark" accordion ref="sysPsylife" width="auto" @on-select="addTabs" :active-name="nowTab" :open-names="nowOpen" v-if="!isCollapsed">
        <Submenu v-for="li in Menu" :key="li.id" :name="li.id">
          <template slot="title"><Icon :type="li.icon" />{{li.title}}</template>
          <MenuItem v-for="(i,val) in li.nameBox" :key="val" :name="i.link"><Icon :type="i.icon" />{{i.title}}</MenuItem>
        </Submenu>
      </Menu>
      <div class="menu-box" v-if="isCollapsed">
        <div class="menu-item" v-for="li in Menu" :key="li.id">
          <div class="menu-tite"><Icon :type="li.icon" /></div>
          <div class="menu-list">
            <div class="menu-li" v-for="(i,val) in li.nameBox" :key="val" @click="addTabs(i.link)">
              <Icon :type="i.icon" />{{i.title}}
            </div>
          </div>
        </div>
      </div>
    </Sider>
    <Content class="right">
      <div class="header">
        <div class="header-left">
          <Icon type="md-menu" @click.native="collapsedSider" :class="isCollapsed?'rotate-icon':''"  size="24"  />
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem v-for="li in breadcrumb" :key="li">{{li}}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Dropdown @on-click="exit" class="namebox">
          <div class="name"><Icon class="icon" type="ios-contact"></Icon>{{user.name}}</div>
          <DropdownMenu slot="list"><DropdownItem class="box">退出</DropdownItem></DropdownMenu>
        </Dropdown>
      </div>

      <tab-page :list="tabList" :active="nowTab"  @on-click="addTabs" @on-close="closeTab"></tab-page>

      <div class="content">
        <div class="main-box">
          <router-view/>
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
      siteName: {
        big: '管理平台',
        small: '管'
      },
      isCollapsed: false
    }
  },
  computed: {
    ...mapGetters([
      'user',
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
      'User'
    ]),
    collapsedSider () {
      setTimeout(() => {
        this.$refs.sysSide.toggleCollapse()
      }, 200)
    },
    // 默认效果
    init () {
      let tabList = JSON.parse(this.VueCookie.get('SYS-PSYLIFE-TABLIST'))
      let active = JSON.parse(this.VueCookie.get('SYS-PSYLIFE-LINK'))
      if (tabList) {
        this.defaultTabList(tabList)
        if (active) {
          this.addTabs(active)
        }
      } else {
        this.goHome()
      }
    },
    refresh () {
      this.$nextTick(() => {
        this.$refs.sysPsylife.updateOpened()
        this.$refs.sysPsylife.updateActiveName()
      })
    },
    closeTab (item) {
      if (item.length) {
        this.removeTabs(item)
      } else {
        this.goHome()
      }
    }
  },
  created () {
    this.init()
    // 获取用户信息
    this.User()
  },
  watch: {
    nowOpen: 'refresh',
    tabList: {
      handler: function (val) {
        this.VueCookie.set('SYS-PSYLIFE-TABLIST', JSON.stringify(val))
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.layout{
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
  height: 60px;
  font-size: 22px;
  cursor: pointer;

  user-select: none;
  p{
    padding: 2px 10px;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    background-color: #2d8cf0;
    color:#fff;
    font-weight: bold;
  }
  img{
    width: 80%;
    height: auto;
  }
  .small{
    width: 50%;
  }
}
.left{
  z-index: 2;
  background-color: #001529;
  .ivu-menu-dark{
    overflow-y: auto;
    background-color: #001529;
  }
}
.right{
  position: relative;
  background-color: #f5f7f9;
  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 14px 20px;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    font-size: 20px;
    .header-left{
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 80%;
      i{
        margin-right: 20px;
        cursor: pointer;
      }
    }
    .namebox{
      font-size: 14px;
      cursor: pointer;
      .name{
        display: flex;
        align-items: center;
        flex-direction: row;
        .icon{
          margin-top: -4px;
          margin-right: 10px;
          font-size: 20px;
        }
        .ivu-icon{
          vertical-align: middle;
        }
      }
      .box{
        text-align: center;
      }
    }
  }
  .content{
    overflow: hidden;
    box-sizing: border-box;
    margin: 20px;
    margin-bottom: 0;
    border: 1px solid #e8eaec;
    border-radius: 4px;
    background-color: #fff;
    height: 86vh;
    .main-box{
      overflow-y: auto;
      box-sizing: border-box;
      margin: 20px;
      padding-right: 10px;
      height: 100%;
      font-size: 14px;
    }
  }
}
.rotate-icon{
  transform: rotate(-90deg);
}
.menu-box{
  .menu-item{
    position: relative;
    &:hover{
      .menu-tite{
        background-color: #515a6e;
      }
      .menu-list{
        display: block;
      }
    }
    .menu-tite{
      padding: 6px 2px;
      color: rgba(255,255,255,.7);
      text-align: center;
      font-size: 22px;
      cursor: pointer;
    }
    .menu-list{
      position: absolute;
      top: 6px;
      left: 90px;
      z-index: 3;
      display: none;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 0 5px #999;
      font-size: 14px;
      &::after{
        position: absolute;
        top: 0;
        left: -16px;
        width: 20%;
        height: 100%;
        background-color: transparent;
        content: "";
      }
      .menu-li{
        padding: 6px 16px;
        white-space: nowrap;
        cursor: pointer;
        &:hover{
          background-color: #f0f0f0;
        }
        i{
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
