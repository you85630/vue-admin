<template>
  <div class="editor-menu">
    <!-- 字体 -->
    <VmEditorButton icon="font-size">
      <ul class="editor-ul">
        <li @click="execCommand('fontSize', 7)"><button style="font-size: 24px">7</button></li>
        <li @click="execCommand('fontSize', 6)"><button style="font-size: 22px">6</button></li>
        <li @click="execCommand('fontSize', 5)"><button style="font-size: 20px">5</button></li>
        <li @click="execCommand('fontSize', 4)"><button style="font-size: 18px">4</button></li>
        <li @click="execCommand('fontSize', 3)"><button style="font-size: 16px">3</button></li>
        <li @click="execCommand('fontSize', 2)"><button style="font-size: 14px">2</button></li>
        <li @click="execCommand('fontSize', 1)"><button style="font-size: 12px">1</button></li>
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
    execCommand: function (commandName, valueArgument) {
      if (!valueArgument) {
        valueArgument = null
      }
      document.execCommand(commandName, false, valueArgument)
    },
    setImage: function (evt) {
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
    li {
      display: flex;
      margin: 0;
      padding: 6px 30px;

      justify-content: center;
      &:hover {
        background: #f8f8f8;
      }
      h1 {
        text-align: center;
      }
      button {
        width: 100%;
        height: 100%;
        cursor: pointer;
        color: inherit;
        border: none;
        background: transparent;
      }
    }
  }
</style>
