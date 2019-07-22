<template>
  <ul class="menu-box">
    <li class="menu-li" :class="{'open-menu':item.expand}" v-for="(item, index) in data" :key="'item'+index" @click="selectMenu(item)">
      <div class="title-box" :class="{'menu-active':item.link==select,'title-box-open':item.expand}" @click="openMenu(item,item.link)">
        <Icon class="aline-middle icon" :type="item.icon" />
        <span class="aline-middle">{{item.title}}</span>
        <Icon v-if="item.children" class="aline-middle right-icon" :type="item.expand?'ios-arrow-down':'ios-arrow-forward'" />
      </div>
      <div class="menu-main"  v-if="item.children">
        <menu-li :class="'menu-li-'+index" :data="item.children" v-show="item.expand"  @on-change="selectMenu"></menu-li>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'menu-li',
  data () {
    return {
      select: ''
    }
  },
  props: {
    value: {
      type: [String, Number, Object, Array]
    },
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectMenu (item) {
      if (item.link) {
        this.select = item.link
        this.$emit('on-change', item)
        this.$emit('input', item)
      }
    },
    openMenu (item, key) {
      if (!key) {
        item.expand = !item.expand
        this.$forceUpdate()
      }
    }
  }
}
</script>
