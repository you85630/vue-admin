<template>
  <div class="vm-editor">
    <VmEditorMenu>
      <VmEditorButton icon="upload" @click.native="uploadHtml" class="global-control"></VmEditorButton>
    </VmEditorMenu>
    <div class="vm-editor-content" contenteditable="true" v-focus></div>
  </div>
</template>

<script>
export default {
  name: 'VmEditor',
  components: {
    VmEditorButton: () => import('./vm-editor-button.vue'),
    VmEditorMenu: () => import('./vm-editor-menu.vue')
  },
  data: function () {
    return {
      html: 'Please Enter ...'
    }
  },
  methods: {
    uploadHtml: function () {
      let style = {
        ul: `
              margin: 10px 20px;
              list-style-type: square;
              padding: 0;
            `,
        ol: `
              margin: 10px 20px;
              list-style-type: decimal;
              padding: 0;
            `,
        li: `
              display: list-item;
              padding: 0;
            `,
        hr: `
              margin: 15px 0;
              border-top: 1px solid #eeeff1;
            `,
        pre: `
              display: block;
              margin: 10px 0;
              padding: 8px;
              border-radius: 4px;
              background-color: #f2f2f2;
              color: #656565;
              font-size: 14px;
             `,
        blockquote: `
                      display: block;
                      border-left: 4px solid #ddd;
                      margin: 15px 0;
                      padding: 0 15px;
                    `,
        img: `
               margin: 20px 0;
             `,
        a: `
            color: #41b883;
           `
      }
      let html = document.getElementsByClassName('vm-editor-content')[0]
      let htmlContainerParent = document.createElement('div')
      let htmlContainer = document.createElement('div')
      let tagNames = Object.keys(style)
      for (let i = 0; i < tagNames.length; i++) {
        let _tagNames = html.getElementsByTagName(tagNames[i])
        if (_tagNames.length > 0) {
          for (let j = 0; j < _tagNames.length; j++) {
            _tagNames[j].style = style[tagNames[i]]
          }
        }
      }
      htmlContainer.style = `
                              text-align: left;
                              padding: 15px;
                              font-size: 16px;
                            `
      htmlContainer.innerHTML = html.innerHTML
      htmlContainerParent.appendChild(htmlContainer)

      this.$emit('upload', htmlContainerParent.innerHTML)
    }
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
  .vm-editor{
    background-color: white;
    border-radius: 4px;
    border: 1px solid #eeeff1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .global-control{
      position: absolute;
      right: 15px;
    }
    .vm-editor-content{
      outline: 0;
      height: calc(100% - 40px);
      min-height: 350px;
      text-align: left;
      padding: 15px;
      font-size: 16px;
      ul, ol{
        margin: 10px 20px;
        padding: 0;
      }
      ul{
        list-style-type: square;
      }
      ol{
        list-style-type: decimal;
      }
      li{
        display: list-item;
        padding: 0;
      }
      hr{
        margin: 15px 0;
        border-top: 1px solid #eeeff1;
      }
      pre{
        display: block;
        margin: 10px 0;
        padding: 8px;
        border-radius: 4px;
        background-color: #f2f2f2;
        color: #656565;
        font-size: 14px;
      }
      blockquote{
        display: block;
        border-left: 4px solid #ddd;
        margin: 15px 0;
        padding: 0 15px;
      }
      img{
        margin: 20px 0;
      }
      a{
        color: #41b883;
      }
    }
  }
</style>
