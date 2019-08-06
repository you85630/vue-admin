<template>
  <Editor @upload="showHtml"></Editor>
</template>

<script>
export default {
  name: 'editor-wrap',
  components: {
    Editor: () => import('./editor')
  },
  methods: {
    showHtml: function (data) {
      console.log(data)
    }
  }
}
</script>

<style>
.preview {
  width: 100%;
  height: 100%;
}
</style>
