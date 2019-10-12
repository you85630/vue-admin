<template>
  <div class="tab-main">
    <div class="tab-nav">
      <div class="nav-list" id="navbox">
        <div class="direction" @click="prev"><Icon type="ios-arrow-back" /></div>
        <div class="tab-box" :style="{marginLeft:mleft+'px'}" id="tabbox">
          <div class="tab" v-for="(li,index) in list" :key="index" :class="{active:li.link===active}">
            <div class="add" @click="linkTab(li)">
              <span></span>
              <p>{{li.title}}</p>
            </div>
            <Icon class="icon" type="ios-close" @click="removeTab(li)" />
          </div>
        </div>
      </div>
      <div class="close-box">
        <div class="direction" @click="next"><Icon type="ios-arrow-forward" /></div>
        <Icon class="direction icon" type="ios-close-circle" @click="showBox" />
        <div class="btn" v-if="closeshow" @click="hideBox">
          <p @click="closeAll">关闭所有</p>
          <p @click="closeOther">关闭其他</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null
    },
    active: {
      type: String, // String, Number, Boolean, Function, Object, Array
      default: null
    }
  },
  data () {
    return {
      here: 0,
      multiple: 200,
      mleft: 0,
      closeshow: false
    }
  },
  methods: {
    // 失去焦点隐藏
    hideBox () {
      this.closeshow = false
    },
    // 关闭按钮
    showBox () {
      this.closeshow = true
    },
    // 左右切换
    prev () {
      if (this.here > 1) {
        this.here--
      } else {
        this.here = 0
      }

      this.mleft = -this.here * this.multiple
    },
    next () {
      let wid = document.getElementById('navbox').offsetWidth
      let all = document.getElementById('tabbox').offsetWidth + 10

      let len = (all - wid) / this.multiple

      if (this.here < len - 1) {
        this.here++
      } else {
        if (len > 0) {
          this.here = len
        } else {
          this.here = 0
        }
      }
      this.mleft = -this.here * this.multiple
    },
    // 切换tab
    linkTab (key) {
      this.$emit('on-click', key)
    },
    // 关闭其他
    closeOther () {
      let now = []
      let active = this.active
      let list = this.list
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          const element = list[key]
          if (element.link === active) {
            now[0] = element
          }
        }
      }
      this.$emit('on-close', now)
    },
    // 关闭全部
    closeAll () {
      this.mleft = 0
      let now = []
      this.$emit('on-close', now)
    },
    // 删除tab
    removeTab (now) {
      let nowList = []
      let active = now.link
      let list = this.list
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          const element = list[key]
          if (now.more) {
            if (now.more !== element.more) {
              nowList.push(element)
            }
          } else {
            if (element.link !== active) {
              nowList.push(element)
            }
          }
        }
      }
      if (nowList.length) {
        this.$emit('on-close', nowList)
      } else {
        this.closeAll()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-main{
  border-top: 1px solid #e8eaec;
  border-bottom: 1px solid #e8eaec;
}
.tab-nav{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  background-color: #e3e3e3;
  .nav-list{
    display: flex;
    overflow: hidden;
    align-items: center;
    flex-direction: row;
    .tab-box{
      display: flex;
      align-items: center;
      flex-direction: row;
      padding-right: 30px;
    }
    .tab{
      display: flex;
      align-items: center;
      flex-direction: row;
      box-sizing: border-box;
      margin: 4px;
      padding: 2px 0;
      background-color: #fff;
      box-shadow: 0 0 2px #ccc;
      font-size: 12px;
      cursor: pointer;
      .add{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 22px;
        span{
          display: flex;
          margin: 0 6px;
          width: 12px;
          height: 12px;
          border-radius: 100%;
          background-color: #e3e3e3;
        }
        p{
          overflow: hidden;
          padding: 0 6px;
          max-width: 300px;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-spacing: nowrap;
        }
      }
      .icon{
        margin-right: 6px;
        font-size: 22px;
        &:hover{
          color: #ed4014;
          font-weight: bold;
        }
      }
    }
    .active{
      color: #2d8cf0;
      .add{
        span{
            background-color: #2d8cf0;
        }
      }
      .icon{
        color: #666;
      }
    }
  }
  .direction{
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 10px;
    height: 34px;
    background-color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  .close-box{
    position: relative;
    display: flex;
    align-items: center;
    .icon{
      border-left: 1px solid #f5f5f5;
    }
    .btn{
      position: absolute;
      top: 34px;
      right: -2px;
      z-index: 1;
      padding: 5px 0;
      border: 2px solid #f5f5f5;
      border-radius: 4px;
      background-color: #fff;
      p{
        margin-top: 5px;
        padding: 0 12px;
        white-space: nowrap;
        font-size: 14px;
        cursor: pointer;

        user-select: none;
        &:first-child{
          margin-top: 0;
        }
      }
    }
  }
}
</style>
