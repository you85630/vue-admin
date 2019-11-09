# vue-admin
<template>
  <div class="table-wrap">
    <div class="table-spin-box" v-if="loading">
      <Spin size="large" fix></Spin>
    </div>
    <div class="table-box" :class="{'table-box-border':border}" v-else>
      <div class="tree-header">
        <table>
          <colgroup>
            <col v-for="(item,index) in columnsList" :key="index" :width="item.width">
          </colgroup>
          <thead>
            <tr>
              <th :class="item.align?'table-line-'+item.align:''" v-for="(item,index) in columnsList" :key="index">
                <div class="table-tr-children"><span>{{item.title}}</span></div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <tree-body :columns="columnsList" :data="dataList"></tree-body>
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
  },
  computed: {
    dataList: {
      get () {
        let list = JSON.parse(JSON.stringify(this.data))
        let data = this.loopData(list, 0)
        return data
      },
      set () {}
    },
    columnsList: {
      get () {
        let data = JSON.parse(JSON.stringify(this.columns))
        for (let i = 0; i < data.length; i++) {
          const element = data[i]
          for (const key in element) {
            if (element.hasOwnProperty(key)) {
              if (key == 'key') {
                element.keyType = 'key'
              }
              if (key == 'render') {
                element.keyType = 'render'
              }
              if (key == 'slot') {
                element.keyType = 'slot'
              }
            }
          }
        }
        return data
      },
      set () {}
    }
  },
  methods: {
    loopData (data, index) {
      for (let i = 0; i < data.length; i++) {
        const element = data[i]
        element.expand = true
        element.level = index
        if (element.children) {
          this.loopData(element.children, index + 1)
        }
      }
      return data
    }
  }
}
</script>

<style lang="scss">
.table-wrap {
  font-size: 0;
  position: relative;
  overflow: hidden;
  border: 1px solid #dcdee2;
  border-right: 0;
  border-bottom: 0;
  table {
    width: 100%;
  }
  .table-spin-box {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100px;
    border: 1px solid #dcdee2;
    border-top: none;
    border-left: none;
  }
}
.table-box {
  font-size: 12px;
  overflow: hidden;
  box-sizing: border-box;
  width: inherit;
  max-width: 100%;
  height: 100%;
  color: #515a6e;
  background-color: #fff;
  table {
    table-layout: fixed;
    border-bottom: 1px solid #e8eaec;
    tr {
      &:hover {
        background-color: #ebf7ff;
      }
      td ,th {
        box-sizing: border-box;
        min-width: 0;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: left;
        vertical-align: middle;
        text-overflow: ellipsis;
      }
      .table-tr-children {
        box-sizing: border-box;
        padding-right: 10px;
        padding-left: 10px;
        word-break: break-all;
      }
      th {
        overflow: hidden;
        white-space: nowrap;
        background-color: #f8f8f9;
        .table-tr-children {
          display: inline-block;
          vertical-align: middle;
          word-wrap: normal;
        }
      }
      .table-tr-children-icon {
        margin-right: 4px;
        cursor: pointer;
      }
      .table-data-none {
        text-align: center;
      }
      .table-tr-text {
        display: block;
      }
    }
    .table-line-left {
      text-align: left;
    }
    .table-line-right {
      text-align: right;
    }
    .table-line-center {
      text-align: center;
    }
  }
}
.tree-header {
  overflow: hidden;
}
.table-box-border {
  td ,th {
    border-right: 1px solid #e8eaec;
  }
}
@for $n from 0 through 10 {
  .lev-#{$n} {
    box-sizing: border-box;
    padding-left: 18px * $n;
  }
}
</style>
