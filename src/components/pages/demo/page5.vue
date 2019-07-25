<template>
  <div>
    <editor-wrap></editor-wrap>
  </div>
</template>

<script>
export default {
  name: 'page5',
  components: {
    editorWrap: () => import('components/common/modules/editor')
  }
}
</script>
