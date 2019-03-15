<template>
  <div class="login-box">
    <Card class="card">
      <p class="title" slot="title"><img src="./../assets/img/logo-small.png" alt="">管理平台</p>
      <Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" size="large" v-model="formInline.user" placeholder="请填写用户名"></Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" size="large" v-model="formInline.password" placeholder="请填写密码"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" long @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>

    </Card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      formInline: {
        user: 'admin',
        password: '123456'
      },
      ruleInline: {
        user: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          {
            type: 'string',
            min: 1,
            message: '密码长度不能小于6位',
            trigger: 'blur'
          }
        ],
        code: [{ required: true, message: '请填写验证码', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapGetters([
      'Message'
    ])
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    // 登录
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.login(this.formInline)
        }
      })
    },
    // 全局提示
    getMessage (val) {
      if (val) {
        if (val.code === 200) {
          this.$Message.success({
            content: '登录成功',
            duration: 2
          })
          this.formInline = {
            user: '',
            password: '',
            code: '',
            captcha_id: ''
          }
        } else {
          this.$Message.error({
            content: val.info,
            duration: 2
          })
        }
      }
    }
  },
  watch: {
    'Message': 'getMessage'
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #17233d;
}
.card {
  width: 400px;
  .title {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    img{
      height: 38px;
      width: auto;
      margin-right: 10px;
    }
  }
  .form {
    padding: 0 20px;
    padding-top: 20px;
    .ivu-input {
      height: 40px;
      border: none;
      background-color: #fff;
      box-shadow: inset 0 1px 2px #515a6e;
      font-size: 18px;
    }
  }
}
</style>
