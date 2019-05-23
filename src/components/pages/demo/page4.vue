<template>
  <div class="page">
    <p>444</p>
    <CheckboxGroup v-model="fruit">
      <Checkbox label="香蕉"></Checkbox>
      <Checkbox label="苹果"></Checkbox>
      <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script>
export default {
  name: 'page4',
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
