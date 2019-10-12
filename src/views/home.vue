<template>
  <Layout class="Home">
    <Sider class="Sider" ref="HomeSide" width="300">
      <div ref="HomeLogo" class="Logo" @click="GoHome"><p>管理平台</p></div>

      <div class="Menu">
        <Menu ref="HomeMenu" theme="dark" accordion width="auto" class="Menu-box" :active-name="HomeMenuActive" :open-names="HomeMenuOpen" @on-select="HomeMenuSelect">
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
            <MenuItem :name="item.name" v-else><Icon :type="item.icon" />{{item.label}}</MenuItem>
          </span>
        </Menu>
      </div>
    </Sider>

    <Layout class="Layout">
      <Header class="Header" ref="HomeHeader">
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
  computed: {
    ...mapGetters([
      'HomeMenuList',
      'BreadcrumbList',
      'HomeMenuActive',
      'HomeMenuOpen'
    ])
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions([
      'exit',
      'GoHome',
      'HomeMenuSelect'
    ]),
    // 默认事件
    init () {
      // this.$nextTick(() => {
      //   this.$refs.HomeMenu.updateOpened()
      //   this.$refs.HomeMenu.updateActiveName()
      // })
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
