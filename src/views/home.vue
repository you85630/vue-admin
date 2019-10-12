<template>
  <Layout class="home-layout">
      <Sider ref="HomeSide" width="300">
        <div ref="HomeLogo" class="logo" @click="GoHome"></div>

        <Menu ref="HomeMenu" theme="dark" accordion width="auto" class="menu-item" :style="HomeHeader" :active-name="HomeMenuActive" :open-names="HomeMenuOpen" @on-select="HomeMenuSelect">
          <span v-for="(item, index) in HomeMenuList" :key="index">
            <Submenu :name="item.name" v-if="item.children">
              <template slot="title"><Icon :type="item.icon" />{{item.label}}</template>

              <span v-for="(li, indx) in item.children" :key="indx">
                <Submenu :name="li.name" v-if="li.children">
                  <template slot="title"><Icon :type="li.icon" />{{li.label}}</template>

                  <span v-for="(i, iv) in li.children" :key="iv">
                    <Submenu :name="i.name" v-if="i.children">
                      <template slot="title"><Icon :type="i.icon" />{{i.label}}</template>

                      <span v-for="(j, jv) in i.children" :key="jv">
                        <Submenu :name="j.name" v-if="j.children">
                          <template slot="title"><Icon :type="j.icon" />{{j.label}}</template>
                          <MenuItem :name="k.name" v-for="(k, kv) in j.children" :key="kv">{{k.label}}</MenuItem>
                        </Submenu>
                        <MenuItem :name="j.name" v-else>{{j.label}}</MenuItem>
                      </span>

                    </Submenu>
                    <MenuItem :name="i.name" v-else>{{i.label}}</MenuItem>
                  </span>

                </Submenu>
                <MenuItem :name="li.name" v-else>{{li.label}}</MenuItem>
              </span>

            </Submenu>
            <MenuItem :name="item.name" v-else>{{item.label}}</MenuItem>
          </span>
        </Menu>
      </Sider>

      <Layout>
        <Header class="header-wrap" ref="HomeHeader">
          <Breadcrumb>
            <BreadcrumbItem><Icon type="md-home" size="14" style="margin-right:6px"></Icon>Home</BreadcrumbItem>
            <BreadcrumbItem v-for="(item, index) in BreadcrumbList" :key="index">{{item.label}}</BreadcrumbItem>
          </Breadcrumb>
          <Poptip placement="bottom">
            <Badge :count="1">
              <Avatar shape="square" icon="ios-person" />
            </Badge>
            <ul slot="content" class="user-handle">
              <li>消息</li>
              <li class="red">退出</li>
            </ul>
          </Poptip>
        </Header>

        <Content class="container" :style="HomeContainer">
          <router-view/>
        </Content>
      </Layout>
  </Layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      // 内容区域高度
      HomeHeight: {}
    }
  },
  computed: {
    ...mapGetters([
      'HomeMenuList',
      'BreadcrumbList',
      'HomeMenuActive',
      'HomeMenuOpen'
    ]),
    // 标题区域高度
    HomeHeader () {
      let style = {
        height: this.HomeHeight.HomeHeader
      }
      return style
    },
    // 内容区域高度
    HomeContainer () {
      let style = {
        height: this.HomeHeight.ContainerHeight
      }
      return style
    }
  },
  mounted () {
    // 监听窗口变化
    this.onresizePage()
    window.onresize = () => {
      this.onresizePage()
    }
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions([
      'GoHome',
      'HomeMenuSelect'
    ]),
    // 监听窗口变化
    onresizePage () {
      let Gap = 42
      let Home = window.innerHeight
      let Header = this.$refs.HomeHeader.clientHeight
      let Logo = this.$refs.HomeLogo.clientHeight
      this.HomeHeight = {
        HomeHeader: (Home - Logo - Gap) + 'px',
        ContainerHeight: (Home - Header - Gap) + 'px'
      }
    },
    // 默认事件
    init () {
      this.$nextTick(() => {
        this.$refs.HomeMenu.updateOpened()
        this.$refs.HomeMenu.updateActiveName()
      })
    },
    // 监控路由
    changeRouter (val) {
      if (val.name === 'Home') {
        this.$refs.HomeMenu.currentActiveName = null
      }
    }
  },
  watch: {
    $route: {
      handler: 'changeRouter',
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.home-layout {
  position: relative;
  overflow: hidden;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.logo {
  display: flex;
  overflow: hidden;
  flex-direction: row;
  width: 80%;
  height: 50px;
  margin: 20px auto;
  cursor: pointer;
  border-radius: 4px;
  background-color: #5b6270;

  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
  p {
    font-size: 20px;
    overflow: hidden;
    padding: 0 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #fff;
  }
}
.header-wrap {
  display: flex;
  flex-direction: row;
  padding-right: 64px;
  padding-left: 20px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);

  justify-content: space-between;
  align-items: center;
  .ivu-poptip {
    line-height: 1;
  }
  .user-handle {
    li {
      font-size: 14px;
      padding: 10px 0;
      cursor: pointer;
      text-align: center;
      border-top: 1px solid #e8eaec;
      &:first-child {
        border: none;
      }
    }
  }
}
.container {
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 1px rgba(0,0,0,.1);
}
.red{
  color: #ed4014;
}
.green{
  color: #19be6b;
}
.blue{
  color: #2d8cf0;
}
.yellow{
  color: #ff9900;
}
.black{
  color: #515a6e;
}
</style>
