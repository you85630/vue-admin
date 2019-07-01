<template>
  <div class="treelist">
    <ul class="tree-title">
      <li v-for="(item,index) in columns" :key="index" :style="{width:item.width?item.width+'px':widthLi,textAlign:item.align}">{{item.name}}</li>
    </ul>
    <tree-body :columns="columns" :data="data"></tree-body>
  </div>
</template>

<script>
export default {
  name: 'tree-head',
  props: [
    'columns',
    'data'
  ],
  components: {
    treeBody: () => import('./tree-body')
  },
  computed: {
    widthLi: function (val) {
      let title = this.columns.length
      let width = 100 / title + '%'
      return width
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.treelist {
  font-size: 0;
  margin: 10px auto;
  border: 1px solid #dcdee2;
  .tree-title {
    height: 40px;
    background-color: #f8f8f9;
    color: #515a6e;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    li {
      width: 200px;
      text-align: left;
      font-size: 12px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      padding: 0 18px;
    }
  }
}
</style>
