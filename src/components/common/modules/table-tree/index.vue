<template>
  <div class="table-wrap">
    <div class="table-box" :class="{'table-box-border':border}" v-if="loading">
      <div class="tree-header">
        <table>
          <colgroup>
            <col v-for="(item,index) in columns" :key="index" :width="item.width">
          </colgroup>
          <thead>
            <tr>
              <th :class="item.align?'table-line-'+item.align:''" v-for="(item,index) in columns" :key="index">
                <div class="table-tr-children"><span>{{item.title}}</span></div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tree-body">
        <table>
          <colgroup>
            <col v-for="(item,index) in columns" :key="index" :width="item.width">
          </colgroup>
          <tbody>
            <tr v-for="(item,index) in data" :key="index">
              <td :class="li.align?'table-line-'+li.align:''" v-for="(li,val) in columns" :key="index+'-'+val">
                <div class="table-tr-children">
                  <div v-if="li.key!=='action'">
                    <Icon class="table-tr-children-icon" v-if="val==0&&item.children" :type="item.expand ?'ios-arrow-down':'ios-arrow-forward'"/>
                    <span>{{item[li.key]}}</span>
                  </div>
                  <div v-else>
                    <table-expand :row="item" :column="li" :index="index" :render="li.render"></table-expand>
                </div>
                </div>
              </td>
            </tr>
            <tree-body v-for="(item,index) in data" :key="'i'+index" :columns="columns" :data="item.children"></tree-body>
          </tbody>
        </table>
      </div>
    </div>
    <Spin size="large" fix v-else></Spin>
  </div>
</template>

<script>
export default {
  name: 'tree-head',
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  components: {
    treeBody: () => import('./tree-body'),
    TableExpand: () => import('./expand')
  }
}
</script>

<style lang="scss">
.table-wrap {
  position: relative;
  border: 1px solid #dcdee2;
  border-bottom: 0;
  border-right: 0;
  overflow: hidden;
  font-size: 0;
  table{
    width: 100%;
  }
}
.table-box{
  width: inherit;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  color: #515a6e;
  font-size: 12px;
  background-color: #fff;
  box-sizing: border-box;
  table{
    table-layout: fixed;
    tr{
      &:hover{
        background-color: #EBF7FF;
      }
      td,th{
        min-width: 0;
        height: 48px;
        box-sizing: border-box;
        text-align: left;
        text-overflow: ellipsis;
        vertical-align: middle;
        border-bottom: 1px solid #e8eaec;
      }
      .table-tr-children{
        padding-left: 18px;
        padding-right: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: break-all;
        box-sizing: border-box;
      }
      th{
        height: 40px;
        white-space: nowrap;
        overflow: hidden;
        background-color: #f8f8f9;
        .table-tr-children{
          display: inline-block;
          word-wrap: normal;
          vertical-align: middle;
        }
      }
      .table-tr-children-icon{
        margin-right: 4px;
      }
    }
    .table-line-left{
      text-align: left;
    }
    .table-line-right{
      text-align: right;
    }
    .table-line-center{
      text-align: center;
    }
  }
}
.tree-header{
  overflow: hidden;
}
.table-box-border{
  td,th{
      border-right: 1px solid #e8eaec;
  }
}
@for $n from 0 through 10 {
  .lev-#{$n} {
    padding-left: 18px * $n;
    box-sizing: border-box;
  }
}
</style>
