<template>
  <div class="treelist">
    <table>
      <thead>
        <tr class="tree-title">
          <th v-for="(item,index) in columns" :key="index">{{item.name}}</th>
        </tr>
      </thead>
      <tbody v-for="(item,index) in data" :key="index">
        <tr class="tree-tr">
          <td v-for="(li,value) in columns" :key="value">
            <div class="tree-tr-td" v-if="value==0">
              <Icon v-if="item.children" :type="item.expanded ?'ios-arrow-forward':'ios-arrow-down'"/>
              <span>{{item[li.key]}}</span>
            </div>
            <div class="tree-tr-td" v-else>{{item[li.key]}}</div>
          </td>
        </tr>
        <template v-if="item.children">
          <tr class="tree-tr" v-for="(child,v) in item.children" :key="v">
            <td v-for="(li,val) in columns" :key="val">
              <!-- <div class="tree-tr-td pdl" v-if="val==0">
                <Icon v-if="child.children" :type="child.expanded ?'ios-arrow-forward':'ios-arrow-forward'"/>
                <span>{{child[li.key]}}</span>
              </div>
              <div class="tree-tr-td" v-else>{{child[li.key]}}</div> -->
              {{renderBody(child,columns)}}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tree',
  props: [
    'columns',
    'data'
  ],
  methods: {
    renderBody (row, column, index) {
      return row[column.key]
    }
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
    th {
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
  .tree-tr {
    height: 48px;
    border-top: 1px solid #e8eaec;
    text-align: left;
    color: #515a6e;
    td {
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      box-sizing: border-box;
      text-overflow: ellipsis;
      vertical-align: middle;
      padding: 0 18px;
      .tree-tr-td {
        span {
          padding: 0 4px;
        }
      }
    }
  }
  .pdl{
    padding-left: 18px;
  }
}
</style>
