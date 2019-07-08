<template>
  <div>
    <Button type="primary" @click="showModal">弹窗+表单</Button>

    <Modal footer-hide v-model="demoModal.show" :title="demoModal.title" @on-visible-change="changeModal">
      <Form ref="demoModal.formItem" :model="demoModal.formItem" :rules="ruleValidate" :label-width="80">
        <FormItem label="Name" prop="name">
          <Input v-model="demoModal.formItem.name" placeholder="请输入Name..."></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('demoModal.formItem')">Submit</Button>
          <Button @click="handleReset('demoModal.formItem')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleValidate: {
        name: [
          { required: true, message: 'name不能为空', trigger: 'blur' }
        ]
      },
      demoModal: {
        show: false,
        title: '标题',
        formItem: {}
      }
    }
  },
  methods: {
    // 打开弹框
    showModal () {
      this.demoModal = {
        show: true,
        title: '标题',
        formItem: {}
      }
    },
    // 关闭弹框
    changeModal (key) {
      if (!key) {
        this.demoModal = {
          show: false,
          title: '',
          formItem: {}
        }
      }
    },
    // 重置表单
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    // 提交表单
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('请填写玩必填项后提交')
        };
      })
    }
  }
}
</script>
