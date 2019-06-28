<template>
 <div class="hljs-template-tag">
    <tr class="tree-tr">
      <td class="tree-tr-td-pdl" v-for="(li,val) in columns" :key="val">
        <div class="tree-tr-td tree-tr-td-pdl" v-if="val==0">
          <Icon v-if="child.children" :type="child.expanded ?'ios-arrow-forward':'ios-arrow-forward'"/>
          <span>{{child[li.key]}}</span>
        </div>
        <div class="tree-tr-td" v-else>{{child[li.key]}}</div>
      </td>
    </tr>
    <tree v-for="(li,index) in child.children" :key="index" :columns="columns" :child="li"></tree>
 </div>
</template>

<script>
export default {
  name: 'tree',
  props: [
    'columns',
    'child'
  ]
}
</script>

<style lang="scss" scoped>

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
.tree-tr-td-pdl{
  padding: 0 0 0 18px;
}
</style>
