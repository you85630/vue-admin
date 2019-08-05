<template>
  <div class="editor-button" @mouseleave="hideSlot" @click="showSlot">
    <span class="button"><img :src="require('./iconimg/' + icon + '.png')" width="16" height="16"></span>
    <div class="button-other" v-if="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VmEditorButton',
  props: {
    icon: {
      type: String,
      default: 'fa fa-header'
    }
  },
  data: function () {
    return {
      slot: false
    }
  },
  methods: {
    showSlot () {
      this.slot = true
    },
    hideSlot () {
      this.slot = false
    }
  }
}
</script>

<style lang="scss">
  .editor-button {
    position: relative;
    display: flex;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    outline: 0;
    background-color: transparent;

    justify-content: center;
    align-items: center;
    &:first-child {
      margin-left: 0;
    }
    .button {
      display: flex;
      width: 24px;
      height: 24px;

      justify-content: center;
      align-items: center;
      &:hover {
        background-color: #eee;
      }
    }
    .button-other {
      position: absolute;
      top: 30px;
      left: 0;
      border: 1px solid #eeeff1;
      border-radius: 4px;
      background-color: #fff;
      &::before {
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        height: 10px;
        content: '';
        background-color: transparent;
      }
    }
  }
</style>
