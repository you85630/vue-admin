<template>
  <div>
      <menu-li :active="select" :data="data" @click="success"></menu-li>
  </div>
</template>

<script>
export default {
  name: 'menu-wrap',
  data () {
    return {
      select: this.active
    }
  },
  components: {
    menuLi: () => import('./menu')
  },
  computed: {
    menuList: {
      get () {
        let list = JSON.parse(JSON.stringify(this.data))
        return list
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
    success (item) {
      console.log(item)

      this.select = item
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
