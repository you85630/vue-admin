<template>
  <Layout class="Home">
    <Sider class="Sider" ref="HomeSide" width="300">
      <div ref="HomeLogo" class="Logo"><p @click="goHome">管理平台</p></div>

      <div class="Menu">
        <Menu ref="HomeMenu" theme="dark" accordion width="auto" class="Menu-box" :active-name="HomeMenuActive" :open-names="HomeMenuOpen" @on-select="HomeMenuSelect">
          <span v-for="(item, index) in HomeMenuList" :key="index">
            <Submenu :name="index" v-if="item.children">
              <template slot="title"><Icon :type="item.icon" />{{item.label}}</template>

              <span v-for="(li, indx) in item.children" :key="indx">
                <Submenu :name="index+'-'+indx" v-if="li.children">
                  <template slot="title"><Icon :type="li.icon" />{{li.label}}</template>

                  <span v-for="(i, iv) in li.children" :key="iv">
                    <Submenu :name="index+'-'+indx+'-'+iv" v-if="i.children">
                      <template slot="title"><Icon :type="i.icon" />{{i.label}}</template>

                      <span v-for="(j, jv) in i.children" :key="jv">
                        <Submenu :name="index+'-'+indx+'-'+iv+'-'+jv" v-if="j.children">
                          <template slot="title"><Icon :type="j.icon" />{{j.label}}</template>
                          <MenuItem :name="index+'-'+indx+'-'+iv+'-'+jv+'-'+kv" v-for="(k, kv) in j.children" :key="kv"><Icon :type="k.icon" />{{k.label}}</MenuItem>
                        </Submenu>
                        <MenuItem :name="index+'-'+indx+'-'+iv+'-'+jv" :to="j.link" v-else><Icon :type="j.icon" />{{j.label}}</MenuItem>
                      </span>

                    </Submenu>
                    <MenuItem :name="index+'-'+indx+'-'+iv" :to="i.link" v-else><Icon :type="i.icon" />{{i.label}}</MenuItem>
                  </span>

                </Submenu>
                <MenuItem :name="index+'-'+indx" :to="li.link" v-else><Icon :type="li.icon" />{{li.label}}</MenuItem>
              </span>

            </Submenu>
            <MenuItem :name="index" :to="item.link" v-else><Icon :type="item.icon" />{{item.label}}</MenuItem>
          </span>
        </Menu>
      </div>
    </Sider>

    <Layout class="Layout">
      <Header class="Header" ref="HomeHeader">
        <Breadcrumb>
          <BreadcrumbItem><Icon type="md-home" size="18" style="margin-right:6px"></Icon>Home</BreadcrumbItem>
          <BreadcrumbItem v-for="(item, index) in BreadcrumbList" :key="index">{{item.label}}</BreadcrumbItem>
        </Breadcrumb>
        <Poptip placement="bottom">
          <div class="Badge"><Avatar shape="square" icon="ios-person" /><span class="name">{{userInfo.name}}</span></div>
          <ul slot="content" class="user-handle">
            <li class="red" @click="exit">退出</li>
          </ul>
        </Poptip>
      </Header>

      <Content class="Content">
        <div class="content-box">
          <router-view/>
        </div>
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
      // 面包屑
      BreadcrumbList: [],
      // 导航选中
      HomeMenuActive: null,
      // 导航展开
      HomeMenuOpen: []
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'HomeMenuList'
    ])
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions([
      'getUserInfo',
      'exit'
    ]),
    // 默认事件
    init () {
      this.getUserInfo()

      let key = sessionStorage.getItem('HomeMenuActive')
      if (key) {
        this.HomeMenuSelect(key)
      }
    },
    // 导航选择
    HomeMenuSelect (name) {
      let list = name.length > 1 ? name.split('-') : [name]
      let active = name.length > 1 ? name : Number(name)

      sessionStorage.setItem('HomeMenuActive', name)

      let open = []
      open.length = list.length - 1
      for (let i = 0; i < open.length; i++) {
        let open1 = list[0]
        if (open1) {
          open[0] = Number(open1)
          let open2 = open1 + '-' + list[1]
          if (open2) {
            open[1] = open2
            let open3 = open2 + '-' + list[2]
            if (open3) {
              open[2] = open3
              let open4 = open3 + '-' + list[3]
              if (open4) {
                open[3] = open4
                let open5 = open4 + '-' + list[4]
                if (open5) {
                  open[4] = open5
                }
              }
            }
          }
        }
      }

      let bread = []
      for (let i = 0; i < list.length; i++) {
        let bread1 = this.HomeMenuList[list[0]]
        if (bread1) {
          bread[0] = bread1
          let bread2 = bread1.children ? bread1.children[list[1]] : undefined
          if (bread2) {
            bread[1] = bread2
            let bread3 = bread2.children ? bread2.children[list[2]] : undefined
            if (bread3) {
              bread[2] = bread3
              let bread4 = bread3.children ? bread3.children[list[3]] : undefined
              if (bread4) {
                bread[3] = bread4
                let bread5 = bread4.children ? bread4.children[list[4]] : undefined
                if (bread5) {
                  bread[4] = bread5
                }
              }
            }
          }
        }
      }

      this.HomeMenuActive = active
      this.HomeMenuOpen = open
      this.BreadcrumbList = bread

      this.$nextTick(() => {
        this.$refs.HomeMenu.updateOpened()
        this.$refs.HomeMenu.updateActiveName()
      })
    },

    // 跳转首页
    goHome () {
      sessionStorage.removeItem('HomeMenuActive')

      this.HomeMenuActive = null
      this.HomeMenuOpen = []
      this.BreadcrumbList = []

      this.$nextTick(() => {
        this.$refs.HomeMenu.updateOpened()
        this.$refs.HomeMenu.updateActiveName()
      })

      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.Home {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.Sider {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #363e4f;
  .Logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 20px 0;
    p {
      font-size: 20px;
      font-weight: bold;
      overflow: hidden;
      width: 80%;
      margin: 0 auto;
      padding: 10px 0;
      cursor: pointer;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      background-color: #5b6270;
    }
  }
  .Menu {
    overflow: hidden;
    height: 88%;
    margin-top: 88px;
    .Menu-box {
      overflow-y: auto;
      height: 100%;
      background-color: #363e4f;
    }
  }
}
.Layout {
  position: relative;
  .Header {
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-right: 64px;
    padding-left: 20px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);

    justify-content: space-between;
    align-items: center;
    .ivu-breadcrumb {
      width: 80%;
    }
    .ivu-poptip {
      line-height: 1;
      width: 20%;
      text-align: right;
    }
    .user-handle {
      li {
        font-size: 14px;
        padding: 6px 0;
        cursor: pointer;
        text-align: center;
        border-bottom: 1px solid #e8eaec;
        &:last-child {
          padding-top: 10px;
          border: none;
        }
      }
    }
    .Badge {
      cursor: pointer;
    }
    .name {
      font-size: 14px;
      display: inline-block;
      margin-left: 10px;
      cursor: pointer;
      vertical-align: middle;
    }
  }
  .Content {
    overflow: hidden;
    margin: 20px;
    margin-top: 84px;
    padding: 20px 0;
    background-color: #fff;
    box-shadow: 0 0 1px rgba(0,0,0,.1);
    .content-box {
      overflow-y: auto;
      height: 100%;
      padding: 0 20px;
    }
  }
}
</style>
