<template>
  <div class="page">
    <p>无缓存页面</p>
    <br>
    <CheckboxGroup v-model="fruit">
      <Checkbox label="香蕉"></Checkbox>
      <Checkbox label="苹果"></Checkbox>
      <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
export default {
  name: 'page3',
  data () {
    return {
      fruit: []
    }
  }
}
</script>

<style>
.page{
  font-size: 20px;
}
</style>
