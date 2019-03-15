<template>
  <div class="not-found">
    <div class="box">
      <img src="././../assets/img/notfound.png" alt="">
      <Button size="large" type="primary" shape="circle" @click="goHome">返回首页</Button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'goHome'
    ])
  }
}
</script>

<style lang="scss" scoped>
.not-found{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #5c5e64;
  .box{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: -100px;
  }
}
</style>
