<template>
  <div class="demo">demo</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'demo',
  computed: {
    ...mapGetters([])
  },
  created () {
    this.init()
  },
  methods: {
    ...mapActions([]),
    init () {}
  }
}
</script>

<style lang="scss" scoped>
.demo{
  font-size: 14px;
}
</style>
