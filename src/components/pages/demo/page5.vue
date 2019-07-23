<template>
  <div>
    <editor-text></editor-text>
  </div>
</template>

<script>
export default {
  name: 'page5',
  components: {
    editorText: () => import('components/common/modules/editor-text')
  }
}
</script>

<style lang="scss" scoped>

</style>
