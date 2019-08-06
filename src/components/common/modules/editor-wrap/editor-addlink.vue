<template>
  <div class="add-link">
    <input type="text" v-model="link" autofocus>
    <button @click="setLink(link)">Add</button>
  </div>
</template>

<script>
export default {
  name: 'VmEditorAddlink',
  data: function () {
    return {
      link: 'https://www.baidu.com'
    }
  },
  methods: {
    setLink (key) {
      document.execCommand('createLink', false, this.link)
    }
  }
}
</script>

<style lang="scss">
  .add-link {
    width: 300px;
    margin: 0;
    padding: 0;
    padding: 16px;
    input {
      width: 206px;
      border: 1px solid #eeeff1;
    }
    button {
      width: 50px;
      margin-left: 10px;
      padding: 2px 0;
      cursor: pointer;
      color: #fff;
      border: none;
      border-radius: 2px;
      outline: 0;
      background-color: #555;;
    }
  }
</style>
