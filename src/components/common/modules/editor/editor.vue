<template>
  <div
    class="editor"
    :contenteditable="canEdit"
    v-html="innerText"
    @focus="isLocked = true"
    @blur="isLocked = false"
    @input="changeText"></div>
</template>

<script>
export default {
  name: 'editor-box',
  data () {
    return {
      innerText: this.value,
      isLocked: false
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    canEdit: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeText (e) {
      let text = this.$el.innerHTML
      this.$emit('input', text)
    }
  }
}
</script>

<style lang="scss">
.editor {
  width: 100%;
  min-height: 200px;
  padding: 0 10px;

  caret-color: #2d8cf0;
  p ,h1 ,h2 ,h3 ,h4 ,h5 ,table ,pre {
    line-height: 1.5;
    margin: 10px 0;
  }
}
[contenteditable]:focus {
  outline: none;
}
</style>
