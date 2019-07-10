<template>
  <tr>
    {{data}}
    <td :class="li.align?'table-line-'+li.align:''" v-for="(li,val) in columns" :key="'i'+val">
      <div class="table-tr-children">
        <div v-if="li.key!=='action'">
          <Icon class="table-tr-children-icon" v-if="val==0&&data.children" :type="data.expand ?'ios-arrow-down':'ios-arrow-forward'"/>
          <span>{{data[li.key]}}</span>
        </div>
        <div v-else>
          <table-expand :row="data" :column="li" :index="val" :render="li.render"></table-expand>
        </div>
      </div>
    </td>
  </tr>
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
      type: Object
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
    TableExpand: () => import('./expand')
  }
}
</script>
