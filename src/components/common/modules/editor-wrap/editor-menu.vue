<template>
  <div class="editor-menu">
    <!-- 字体 -->
    <VmEditorButton icon="font-size">
      <ul class="editor-ul">
        <li @click="execCommand('formatBlock', '<p>')"><button><p style="font-size: 14px">正文</p></button></li>
        <li @click="execCommand('formatBlock', '<h2>')"><button><h1>标题1</h1></button></li>
        <li @click="execCommand('formatBlock', '<h2>')"><button><h2>标题2</h2></button></li>
        <li @click="execCommand('formatBlock', '<h3>')"><button><h3>标题3</h3></button></li>
        <li @click="execCommand('formatBlock', '<h4>')"><button><h4>标题4</h4></button></li>
      </ul>
    </VmEditorButton>
    <!-- 粗体 -->
    <VmEditorButton icon="bold" @click.native="execCommand('bold')"></VmEditorButton>
    <!-- 斜体 -->
    <VmEditorButton icon="italic" @click.native="execCommand('italic')"></VmEditorButton>
    <!-- 下划线 -->
    <VmEditorButton icon="underline" @click.native="execCommand('underline')"></VmEditorButton>
    <!-- 中划线 -->
    <VmEditorButton icon="strikethrough" @click.native="execCommand('strikeThrough')"></VmEditorButton>
    <!-- 分割线 -->
    <span class="line"></span>
    <!-- 有序列表 -->
    <VmEditorButton icon="ol" @click.native="execCommand('insertOrderedList')"></VmEditorButton>
    <!-- 无需列表 -->
    <VmEditorButton icon="ul" @click.native="execCommand('insertUnorderedList')"></VmEditorButton>
    <!-- 引用 -->
    <VmEditorButton icon="quote"  @click.native="execCommand('formatBlock', '<blockquote>')"></VmEditorButton>
    <!-- 分割线 -->
    <span class="line"></span>
    <!-- 上传图片 -->
    <VmEditorButton icon="image"><VmEditorAddimage></VmEditorAddimage></VmEditorButton>
    <!-- 上传链接 -->
    <VmEditorButton icon="link"><VmEditorAddlink></VmEditorAddlink></VmEditorButton>
    <!-- 分割线 -->
    <span class="line"></span>
    <!-- 对齐方式 -->
    <VmEditorButton icon="align-left" @click.native="execCommand('justifyLeft')"></VmEditorButton>
    <VmEditorButton icon="align-center" @click.native="execCommand('justifyCenter')"></VmEditorButton>
    <VmEditorButton icon="align-right" @click.native="execCommand('justifyRight')"></VmEditorButton>
    <VmEditorButton icon="justify" @click.native="execCommand('justifyFull')"></VmEditorButton>
    <!-- 分割线 -->
    <span class="line"></span>
    <!-- 清空 -->
    <VmEditorButton icon="trash" @click.native="execCommand('delete')"></VmEditorButton>
  </div>
</template>

<script>

export default {
  name: 'VmEditorMenu',
  components: {
    VmEditorButton: () => import('./editor-button.vue'),
    VmEditorAddlink: () => import('./editor-addlink.vue'),
    VmEditorAddimage: () => import('./editor-addimage.vue')
  },
  methods: {
    execCommand (commandName, valueArgument) {
      if (!valueArgument) {
        valueArgument = null
      }
      document.execCommand(commandName, false, valueArgument)
    },
    setImage (evt) {
      let reader = new FileReader()
      let file = evt.target.files[0]
      reader.readAsDataURL(file)
      reader.onload = function (evt) {
        let base64Image = evt.target.result
        document.execCommand('insertImage', false, base64Image)
      }
    }
  }
}
</script>

<style lang="scss">
  .editor-menu {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border-bottom: 1px solid #eeeff1;
    background-color: #fafbfc;

    align-items: center;
    .line {
      display: inline-block;
      width: 1px;
      height: 40px;
      margin: 0 10px;
      background-color: #eeeff1;
    }
  }
  .editor-ul {
    padding: 10px 0;
    li {
      padding: 10px 20px;
      white-space: nowrap;
      &:hover{
        background-color: #f9f9f9;
      }
      button {
        color: inherit;
        background: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }
</style>
