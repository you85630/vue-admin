<template>
  <div class="tree-tr">
    <div class="tree-tr-box" v-for="(item,index) in data" :key="'i'+index">
      <table class="tree-tr-box-table">
        <colgroup>
          <col v-for="(li,val) in columns" :key="index+'-'+val" :width="li.width">
        </colgroup>
        <tbody v-if="treeStart">
          <tr>
            <td :class="[li.align?'table-line-'+li.align:'',val==0?'lev-'+item.level:'']"  v-for="(li,val) in columns" :key="index+'-'+val">
              <div class="table-tr-children">
                <div v-if="li.key!=='action'">
                  <Icon
                    class="table-tr-children-icon"
                    @click="reversal(item)"
                    v-if="val==0&&item.children"
                    :type="item.expand ?'ios-arrow-down':'ios-arrow-forward'"/>
                  <span>{{item[li.key]}}</span>
                </div>
                <table-expand v-else :row="item" :column="li" :index="index" :render="li.render"></table-expand>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <tree-tr :columns="columns" :data="item.children" v-if="item.expand"></tree-tr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tree-tr',
  props: {
    columns: [Array, Object],
    data: [Array, Object]
  },
  data () {
    return {
      treeStart: true
    }
  },
  components: {
    TableExpand: () => import('./expand')
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
