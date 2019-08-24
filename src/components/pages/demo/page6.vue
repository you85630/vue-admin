<template>
  <div class="box">
    <div id="editor1" class="box"></div>
    <div id="editor2" class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'page6',
  data () {
    return {
    }
  },
  created () {},
  mounted () {
    let Editor = require('wangeditor')
    let editor1 = new Editor('#editor1')
    editor1.customConfig.menus = [
      'fontSize', // 字号
      'bold', // 粗体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'link', // 插入链接
      'image' // 插入图片
    ]
    editor1.create()

    let editor2 = new Editor('#editor2')
    editor2.create()
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 400px;
}
</style>
