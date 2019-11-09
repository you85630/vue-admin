<template>
  <div class="page">
    <div class="echart-box"><echart-module :data="line"></echart-module></div>
    <div class="echart-box"><echart-module :data="bar"></echart-module></div>
    <div class="echart-box"><echart-module :data="barright"></echart-module></div>
    <div class="echart-box"><echart-module :data="barmore"></echart-module></div>
    <div class="echart-box"><echart-module :data="radar"></echart-module></div>
    <div class="echart-box"><echart-module :data="mixture"></echart-module></div>
  </div>
</template>
<script>
export default {
  name: 'page2',
  data () {
    return {
    }
  },
  created () {
    this.line = {
      type: 'line',
      title: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Cheese Brownie'],
      data: [100, 70, 40, 10]
    }
    this.bar = {
      type: 'bar',
      title: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Cheese Brownie'],
      data: [100, 70, 40, 10]
    }
    this.barright = {
      type: 'barright',
      title: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Cheese Brownie'],
      data: [100, 70, 40, 10]
    }
    this.barmore = {
      type: 'barmore',
      title: ['2015', '2016', '2017'],
      data: [
        { key: 'Matcha Latte', value: [72.4, 53.9, 39.1] },
        { key: 'Milk Tea', value: [83.1, 73.4, 55.1] },
        { key: 'Cheese Cocoa', value: [86.4, 65.2, 82.5] },
        { key: 'Cheese Brownie', value: [86.4, 73.4, 82.5] }
      ]
    }
    this.radar = {
      type: 'radar',
      title: [
        { name: '销售', max: 50 },
        { name: '信息', max: 50 },
        { name: '客服', max: 50 },
        { name: '研发', max: 50 },
        { name: '市场', max: 50 }
      ],
      data: [
        { name: '本校', value: [43, 40, 28, 35, 50, 19] },
        { name: '全区', value: [50, 34, 28, 31, 42, 21] }
      ]
    }
    this.mixture = {
      type: 'mixture',
      title: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [
        {
          data: [820, 912, 934, 534, 790, 930, 1020],
          type: 'bar',
          name: 'box1'
        }, {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          name: 'box2'
        }, {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          name: 'box3'
        }
      ]

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.echart-box {
  width: 100%;
  height: 500px;
}
</style>
