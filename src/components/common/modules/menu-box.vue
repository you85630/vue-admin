<template>
  <ul class="menu-box">
    <li class="menu-li" :class="'menu-li-'+ (item.level+1)" v-for="(item, index) in data" :key="'item'+index" @click="success(item.link)">
      <div class="title-box" :class="{'menu-active':item.link == select&&select}" @click="openSelectMenu(item)">
        <Icon class="aline-middle icon" :type="item.icon" />
        <span class="aline-middle">{{item.title}}</span>
        <Icon v-if="item.children" class="aline-middle right-icon" :type="item.expand?'ios-arrow-down':'ios-arrow-forward'" />
      </div>
      <div class="menu-main" v-if="item.children">
        <menu-li :active="select" :data="item.children" v-show="item.expand" @success="toSuccess"></menu-li>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'menu-li',
  props: {
    data: {
      type: Array,
      required: true
    },
    active: {
      type: [String, Number, Object, Array]
    }
  },
  computed: {
    select: {
      get () {
        return this.active
      },
      set () {}
    }
  },
  methods: {
    openSelectMenu (item) {
      if (!item.link) {
        item.expand = !item.expand
        this.$forceUpdate()
      }
    },
    success (key) {
      if (key) {
        this.$emit('success', key)
      }
    },
    toSuccess (key) {
      this.$emit('success', key)
    }
  }
}
</script>

<style lang="scss" scoped>
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
    .title-box {
      padding: 14px 24px 14px 23px * $n !important;
    }
  }
}
</style>
