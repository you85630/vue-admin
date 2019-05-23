<template>
  <div class="page">
    <p>333</p>
    <Transfer
        :data="data1"
        :target-keys="targetKeys1"
        @on-change="handleChange1"></Transfer>
  </div>
</template>

<script>
export default {
  name: 'page3',
  data () {
    return {
      data1: this.getMockData(),
      targetKeys1: []
    }
  },
  methods: {
    getMockData () {
      let mockData = []
      for (let i = 1; i <= 10; i++) {
        mockData.push({
          key: i.toString(),
          label: 'Content ' + i,
          description: 'The desc of content  ' + i
        })
      }
      return mockData
    },
    handleChange1 (newTargetKeys, direction, moveKeys) {
      this.targetKeys1 = newTargetKeys
    }
  }
}
</script>

<style>
.page{
  font-size: 20px;
}
</style>
