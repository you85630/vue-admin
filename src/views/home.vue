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
                          <MenuItem :name="index+'-'+indx+'-'+iv+'-'+jv+'-'+kv" v-for="(k, kv) in j.children" :key="kv">{{k.label}}</MenuItem>
                        </Submenu>
                        <MenuItem :name="index+'-'+indx+'-'+iv+'-'+jv" :to="j.link" v-else>{{j.label}}</MenuItem>
                      </span>

                    </Submenu>
                    <MenuItem :name="index+'-'+indx+'-'+iv" :to="i.link" v-else>{{i.label}}</MenuItem>
                  </span>

                </Submenu>
                <MenuItem :name="index+'-'+indx" :to="li.link" v-else>{{li.label}}</MenuItem>
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
          <Badge :count="1"><Avatar shape="square" icon="ios-person" /></Badge><span class="name">{{userInfo.name}}</span>
          <ul slot="content" class="user-handle">
            <li>消息</li>
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
      let HomeMenuList = this.HomeMenuList

      let list = name.length > 1 ? name.split('-') : [name]
      for (let i = 0; i < list.length; i++) {
        const element = list[i]
        list[i] = Number(element)
      }

      let open = [
        Number(list[0]),
        list[0] + '-' + list[1],
        list[0] + '-' + list[1] + '-' + list[2],
        list[0] + '-' + list[1] + '-' + list[2] + '-' + list[3],
        list[0] + '-' + list[1] + '-' + list[2] + '-' + list[3] + '-' + list[4]
      ]

      if (list.length > 1) {
        for (let i = 0; i < open.length; i++) {
          const element = open[i]
          if (i != 0) {
            if (element[0].indexOf('undefined') != -1) {
              delete open[i]
            }
          }
        }
        open.length = list.length - 1
      } else {
        open = []
      }

      let bread = list
      for (let i = 0; i < bread.length; i++) {
        let key1 = HomeMenuList[bread[0]]
        if (key1) {
          bread[0] = key1
          let key2 = key1.children ? key1.children[bread[1]] : undefined
          if (key2) {
            bread[1] = key2
            let key3 = key2.children ? key2.children[bread[2]] : undefined
            if (key3) {
              bread[2] = key3
              let key4 = key3.children ? key3.children[bread[3]] : undefined
              if (key4) {
                bread[3] = key4
                let key5 = key4.children ? key4.children[bread[4]] : undefined
                if (key5) {
                  bread[4] = key5
                }
              }
            }
          }
        }
      }

      sessionStorage.setItem('HomeMenuActive', name)

      this.HomeMenuActive = name
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
    .name {
      font-size: 14px;
      display: inline-block;
      margin-left: 10px;
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
