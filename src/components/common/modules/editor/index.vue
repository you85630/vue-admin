<template>
  <VmEditor @upload="showHtml"></VmEditor>
</template>

<script>
export default {
  components: {
    VmEditor: () => import('./vm-editor')
  },
  methods: {
    showHtml: function (data) {
      console.log(data)
    }
  }
}
</script>

<style>
.preview{
  height: 100%;
  width: 100%;
}
</style>
