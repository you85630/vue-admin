<template>
  <div class="tree">
    <tree :columns="title" :data="list">
      <div slot="action">
        111
      </div>
    </tree>
  </div>
</template>

<script>
import tree from './tree'
export default {
  components: {
    tree
  },
  name: 'treelist',
  data () {
    return {
      title: [
        {
          name: '标题0',
          key: 'name'
        },
        {
          name: '标题1',
          key: 'name1'
        },
        {
          name: '标题2',
          key: 'name2'
        },
        {
          name: '标题4',
          key: 'name3'
        },
        {
          name: '操作',
          key: 'action',
          width: 150,
          align: 'center'
        }
      ],
      list: [
        {
          parent: 0,
          name: '1',
          name1: '111',
          name2: '222',
          name3: '333',
          expanded: true,
          children: [
            {
              parent: 1,
              name: '1-1',
              name1: '111',
              name2: '222',
              name3: '333',
              expanded: false,
              children: [
                {
                  parent: 2,
                  name: '1-1-1',
                  name1: '111',
                  name2: '222',
                  name3: '333',
                  expanded: true
                }, {
                  parent: 2,
                  name: '1-1-2',
                  name1: '111',
                  name2: '222',
                  name3: '333',
                  expanded: true,
                  children: [
                    {
                      parent: 3,
                      name: '1-1-1-1',
                      name1: '111',
                      name2: '222',
                      name3: '333',
                      expanded: true
                    }
                  ]
                }, {
                  parent: 2,
                  name: '1-1-3',
                  name1: '111',
                  name2: '222',
                  name3: '333',
                  expanded: true
                }
              ]
            }, {
              parent: 1,
              name: '1-2',
              name1: '111',
              name2: '222',
              name3: '333',
              expanded: true
            }
          ]
        }, {
          parent: 0,
          name: '2',
          name1: '111',
          name2: '222',
          name3: '333',
          expanded: true
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
