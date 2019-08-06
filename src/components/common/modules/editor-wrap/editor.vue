<template>
  <div class="editor-box">
    <VmEditorMenu></VmEditorMenu>
    <div class="editor-content" contenteditable="true" v-focus></div>
  </div>
</template>

<script>
export default {
  name: 'VmEditor',
  components: {
    VmEditorMenu: () => import('./editor-menu.vue')
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss">
  .editor-box {
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 1px solid #eeeff1;
    border-radius: 4px;
    background-color: white;
    .global-control {
      position: absolute;
      right: 15px;
    }
    .editor-content {
      font-size: 16px;
      line-height: 2;
      overflow-y: auto;
      height: calc(100% - 40px);
      min-height: 350px;
      padding: 15px;
      text-align: left;
      outline: 0;
      ul ,ol {
        margin: 10px 20px;
        padding: 0;
      }
      ul {
        list-style: square;
        li {
          display: list-item;
          padding: 0;
          list-style: square;
        }
      }
      ol {
        list-style: decimal;
        li {
          display: list-item;
          padding: 0;
          list-style: decimal;
        }
      }

      hr {
        margin: 15px 0;
        border-top: 1px solid #eeeff1;
      }
      pre {
        font-size: 14px;
        display: block;
        margin: 10px 0;
        padding: 8px;
        color: #656565;
        border-radius: 4px;
        background-color: #f2f2f2;
      }
      blockquote {
        display: block;
        margin: 15px 0;
        padding: 0 15px;
        border-left: 4px solid #ddd;
      }
      img {
        margin: 20px 0;
      }
      a {
        color: #2d8cf0;
      }
    }
  }
</style>
