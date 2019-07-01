<template>
  <div>
    <div class="tree-box" v-for="(item,index) in data" :key="index">
      <ul class="tree-tr">
        <li v-for="(li,val) in columns" :key="val" :class="[val==0?'lev-'+ item.level:'']" :style="{width:li.width?li.width+'px':widthLi,textAlign:li.align}">
          <div class="tree-tr-td" v-if="val==0" @click="reversal(item)">
            <Icon v-if="item.children" :type="item.expand ?'ios-arrow-down':'ios-arrow-forward'"/>
            <span>{{item[li.key]}}</span>
          </div>
          <div class="tree-tr-td" v-else>
            <p class="tree-tr-td-p" v-if="li.key=='action'">
            <table-expand
                :row="item"
                :column="li"
                :index="index"
                :render="li.render"></table-expand>
            </p>
            <p else>{{item[li.key]}}</p>
          </div>
        </li>
      </ul>
      <tree-body :columns="columns" :data="item.children" v-if="item.expand"></tree-body>
    </div>
  </div>
</template>

<script>
import TableExpand from './expand'
export default {
  name: 'tree-body',
  props: [
    'columns',
    'data'
  ],
  components: {
    TableExpand
  },
  computed: {
    widthLi: function (val) {
      let title = this.columns.length
      let width = 100 / title + '%'
      return width
    }
  },
  methods: {
    reversal (item) {
      item.expand = !item.expand
    },
    renderBody (row, column) {

    }
  }
}
</script>

<style lang="scss" scoped>
.tree-box{
  font-size: 12px;
  border-top: 1px solid #e8eaec;
}
.tree-tr {
  height: 48px;
  text-align: left;
  color: #515a6e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  li {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    .tree-tr-td {
      padding: 0 18px;
      box-sizing: border-box;
      font-size: 12px;
      cursor: pointer;
      span {
        padding: 0 4px;
      }
    }
  }
}
@for $n from 0 through 10 {
  .lev-#{$n} {
    padding-left: 18px * $n;
    box-sizing: border-box;
  }
}
.tree-tr-td-p{
  button{
    margin-right: 5px;
    &:last-child{
      margin-right: 0;
    }
  }
}
</style>
