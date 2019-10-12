<template>
  <div class="not-found">
    <div class="box">
      <img src="././../assets/img/notfound.png" alt="">
      <Button size="large" type="primary" shape="circle"> <router-link to="/home">返回首页</router-link></Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'not-found'

}
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #5c5e64;

  align-items: center;
  justify-content: center;
  .box {
    display: flex;
    flex-direction: column;
    margin-top: -100px;

    align-items: center;
    justify-content: center;
    a {
      color: #fff;
    }
  }
}
</style>
