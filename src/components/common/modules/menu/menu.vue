<template>
  <ul class="menu-box">
    <li class="menu-li" v-for="(item, index) in data" :key="'item'+index">
      <div class="title-box" @click="openSelectMenu(item)">
        <Icon class="aline-middle icon" :type="item.icon" />
        <span class="aline-middle">{{item.title}}</span>
        <Icon v-if="item.children" class="aline-middle right-icon" :type="item.expand?'ios-arrow-down':'ios-arrow-forward'" />
      </div>
      <div class="menu-main"  v-if="item.children">
        <menu-li :class="'menu-li-'+index" :data="item.children" v-show="item.expand" @click="success"></menu-li>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'menu-li',
  data () {
    return {
      select: this.active
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
    openSelectMenu (item) {
      if (!item.link) {
        item.expand = !item.expand
        this.$forceUpdate()
      } else {
        this.$emit('success', item.link)
      }
    },
    success (item) {
      console.log(item)
      this.select = item
    }
  }
}
</script>
