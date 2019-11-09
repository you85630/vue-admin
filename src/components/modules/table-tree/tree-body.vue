<template>
  <div class="tree-body">
    <div v-for="(item,index) in data" :key="'i'+index">
      <table>
        <colgroup>
          <col v-for="(li,val) in columns" :key="index+'-'+val" :width="li.width">
        </colgroup>
        <tbody v-if="treeStart">
          <tr>
            <td :class="li.align?'table-line-'+li.align:''" v-for="(li,val) in columnsList" :key="index+'-'+val">
              <div class="table-tr-children">
                <table-slot v-if="li.typeKey=='slot'" :row="item" :column="li" :index="index"></table-slot>
                <table-expand v-if="li.typeKey=='render'" :row="item" :column="li" :index="index" :render="li.render"></table-expand>
                <div class="table-tr-text" v-if="li.typeKey=='normal'">
                  <Icon :type="item.expand ?'ios-arrow-down':'ios-arrow-forward'" class="table-tr-children-icon"
                    v-if="val==0&&item.children" @click="reversal(item)" />
                  <span :class="{'none-icon':val==0&&!item.children}">{{item[li.key]}}</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <tree-tr :columns="columnsList" :data="item.children" v-if="item.expand"></tree-tr>
    </div>
    <table v-if="!data.length">
      <tr>
        <td class="table-data-none">暂无数据</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tree-body',
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array
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
  data () {
    return {
      treeStart: true
    }
  },
  computed: {
    columnsList () {
      let data = this.columns
      for (let i = 0; i < data.length; i++) {
        const element = data[i]
        element.typeKey = 'normal'
        for (const key in element) {
          if (element.hasOwnProperty(key)) {
            if (key == 'render') {
              element.typeKey = 'render'
            }
            if (key == 'slot') {
              element.typeKey = 'slot'
            }
          }
        }
      }
      return data
    }
  },
  components: {
    TableExpand: () => import('./expand'),
    TableSlot: () => import('./slot'),
    TreeTr: () => import('./tree-tr')
  },
  methods: {
    reversal (item) {
      this.treeStart = false
      this.$nextTick(() => {
        this.treeStart = true
        item.expand = !item.expand
      })
    }
  }
}
</script>
