<template>
  <div class="page">
    <p>无缓存页面</p>
    <br>
    <CheckboxGroup v-model="fruit">
      <Checkbox label="香蕉"></Checkbox>
      <Checkbox label="苹果"></Checkbox>
      <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
    <p class="active">页面设置选中{{fruit}}</p>
  </div>
</template>

<script>
export default {
  name: 'page3',
  data () {
    return {
      fruit: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      let route = this.$route
      if (route.params.id == 2) {
        this.fruit = ['香蕉']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  font-size: 20px;
  .active {
    font-size: 14px;
  }
}
</style>
