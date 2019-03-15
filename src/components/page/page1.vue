<template>
  <div class="page">
    111
    <p><Button @click="closeTab()">关闭当前</Button></p>
    <br>
    <p><Button @click="closeTab('/home/page3')">关闭当前，跳转page3</Button></p>
  </div>
</template>

<script>
export default {
  methods: {
    closeTab (url) {
      this.utils.closeTabs(url)
    }
  }
}
</script>

<style>
.page{
  font-size: 20px;
}
</style>
