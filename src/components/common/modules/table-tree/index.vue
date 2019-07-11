<template>
  <div class="table-wrap">
    <div class="table-spin-box" v-if="loading">
      <Spin size="large" fix></Spin>
    </div>
    <div class="table-box" :class="{'table-box-border':border}" v-else>
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
      <tree-body :columns="columns" :data="data"></tree-body>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tree-table',
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
    treeBody: () => import('./tree-body')
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
  .table-spin-box{
    position: relative;
    width: 100%;
    height: 100px;
    border: 1px solid #dcdee2;
    border-top: none;
    border-left: none;
    overflow: hidden;
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
    border-bottom: 1px solid #e8eaec;
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
        cursor: pointer;
      }
      .table-data-none{
        text-align: center;
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
