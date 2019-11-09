<template>
  <div class="page">
    <table-tree :loading="loading" border :columns="columns" :data="HomeMenuList">
      <template slot-scope="{ row }" slot="action">
        <Button size="small" @click="submit(row)">按钮</Button>
      </template>
    </table-tree>
    <div class="page-box">
      <page-box :total="100" @on-change="changePage"></page-box>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'page1',
  data () {
    return {
      loading: false,
      columns: [
        {
          width: 200,
          title: '名称',
          key: 'label'
        },
        {
          title: '路由',
          key: 'link'
        },
        {
          title: '说明',
          key: 'action',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'success',
                  size: 'small'
                },
                on: {
                  click: () => {
                    console.log(params.row)
                  }
                }
              }, '新增')
            ])
          }
        },
        {
          width: 200,
          title: '操作',
          slot: 'slot',
          align: 'center'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'HomeMenuList'
    ])
  },
  methods: {
    changePage (e) {
      console.log(e)
    },
    submit (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  font-size: 20px;
  .page-box {
    padding-top: 20px;
    text-align: center;
  }
}
</style>
