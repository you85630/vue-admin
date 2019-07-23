<template>
  <ul class="menu-box">
    <li class="menu-li" v-for="(item, index) in data" :key="'item'+index" @click="selectMenu(item.link)">
      <div class="title-box" @click="openMenu(item)">
        <Icon class="aline-middle icon" :type="item.icon" />
        <span class="aline-middle">{{item.title}}</span>
        <Icon v-if="item.children" class="aline-middle right-icon" :type="item.expand?'ios-arrow-down':'ios-arrow-forward'" />
      </div>
      <div class="menu-main"  v-if="item.children">
        <menu-li :class="'menu-li-'+index" :data="item.children" :active="select" v-show="item.expand"></menu-li>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'menu-li',
  computed: {
    menuList: {
      get () {
        let list = JSON.parse(JSON.stringify(this.data))
        return list
      },
      set () {}
    },
    select: {
      get () {
        return this.active
      },
      set () {}
    }
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    active: {
      type: [String, Number, Object, Array]
    }
  },
  methods: {
    openMenu (item) {
      if (!item.key) {
        item.expand = !item.expand
        this.$forceUpdate()
      }
    },
    selectMenu (key) {
      this.select = key
      console.log(this.active)
    }
  }
}
</script>

<style lang="scss">
.menu-box {
  font-size: 0;
  min-width: 240px;
  background-color: #001529;
  .aline-middle {
    display: inline-block;
    vertical-align: middle;
  }
  .aline-top {
    display: inline-block;
    vertical-align: top;
  }
  .aline-bottom {
    display: inline-block;
    vertical-align: bottom;
  }
  .menu-li {
    position: relative;
    cursor: pointer;
    .title-box {
      position: relative;
      padding: 14px 24px;
      color: rgba(255,255,255,.7);
      &:hover {
        color: #fff;
        background: #515a6e;
      }
      .icon {
        font-size: 14px;
        margin-right: 8px;
      }
      span {
        font-size: 14px;
        width: 70%;
      }
      .right-icon {
        font-size: 14px;
        position: absolute;
        top: 16px;
        right: 24px;
        margin-left: 8px;
      }
    }
    .menu-active {
      color: #fff;
      background: #2d8cf0!important;
    }
  }
}
.open-menu {
  background-color: rgba(80, 90, 109, .5);
  .title-box-open {
    background-color: #515a6e;
  }
}

@for $n from 0 through 10 {
  .menu-li-#{$n} {
    li {
      .title-box {
        padding-left: 23px * $n !important;
      }
    }
  }
}
</style>
