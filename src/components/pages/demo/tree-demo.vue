<template>
  <div>
    <tbody v-for="(li,index) in data" :key="index">
      <tr class="tree-tr">
        <td v-for="(i,v) in columns" :key="v">
          <div class="tree-tr-td" v-if="v==0">
            <Icon v-if="li.children" :type="li.expanded ?'ios-arrow-forward':'ios-arrow-down'"/>
            <span>{{li[i.key]}}</span>
          </div>
          <div class="tree-tr-td" v-else>{{li[i.key]}}</div>
        </td>
      </tr>
      <template v-if="li.children">
        <tr class="tree-tr" v-for="(child,s) in li.children" :key="s">
          <td v-for="(i,v) in columns" :key="v">
            <div class="tree-tr-td pdl" v-if="v==0">
              <Icon v-if="child.children" :type="child.expanded ?'ios-arrow-forward':'ios-arrow-forward'"/>
              <span>{{child[i.key]}}</span>
            </div>
            <div class="tree-tr-td" v-else>{{child[i.key]}}</div>
          </td>
        </tr>
      </template>
    </tbody>
  </div>
</template>

<script>
export default {
  name: 'tree',
  props: [
    'columns',
    'data'
  ]
}
</script>

<style lang="scss" scoped>

</style>
