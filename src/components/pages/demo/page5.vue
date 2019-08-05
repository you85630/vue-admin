<template>
  <div>
    <div class="box">
      <slider-box v-model="pwidth" size="4" vertical></slider-box>
      {{pwidth}}
    </div>
    <br>
    <div class="box2">
      <slider-box v-model="pwidth2" size="6" ></slider-box>
      {{pwidth2}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'page5',
  data () {
    return {
      pwidth: 30,
      pwidth2: 20
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 200px;
  margin: 20px 40px;
}
.box2 {
  margin: 20px 40px;
}
</style>
