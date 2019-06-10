<template>
  <div class="page">
    <p>有缓存页面</p>
    <br>
    <Rate v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'page2',
  data () {
    return {
      value: 0
    }
  }
}
</script>

<style>
.page{
  font-size: 20px;
}
</style>
