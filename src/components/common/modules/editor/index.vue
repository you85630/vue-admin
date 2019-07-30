<template>
  <div class="editor-wrap">
    <div class="action-wrap">
      <ul>
        <li v-for="(item, index) in actionList" :key="'item'+index" :title="item.title" @click="uploadHtml(item)">
          <span :class="'action-icon-'+(index+1)"></span>
        </li>
      </ul>
    </div>
    <div class="editor-box">
      <div class="editor" contenteditable="true"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editor-wrap',
  data () {
    return {
      actionList: [
        {
          title: '粗体',
          key: 'bold'
        },
        {
          title: '斜体',
          key: 'italic'
        },
        {
          title: '中划线',
          key: 'strikeThrough'
        },
        {
          title: '下划线',
          key: 'underline'
        },
        {
          title: '间距'
        },
        {
          title: 'h1',
          key: 'fontSize',
          size: 1
        },
        {
          title: 'h2',
          key: 'fontSize',
          size: 2
        },
        {
          title: 'h3',
          key: 'formatBlock',
          size: 3
        },
        {
          title: 'h4',
          key: 'formatBlock',
          size: 4
        },
        {
          title: 'h5',
          key: 'formatBlock',
          size: 5
        },
        {
          title: 'h6',
          key: 'formatBlock',
          size: 6
        },
        {
          title: '间距'
        },
        {
          title: '无序列表',
          key: 'insertOrderedList'
        },
        {
          title: '有序列表',
          key: 'insertUnorderedList'
        },
        {
          title: '左对齐',
          key: 'justifyLeft'
        },
        {
          title: '居中对齐',
          key: 'justifyCenter'
        },
        {
          title: '右对齐',
          key: 'justifyRight'
        },
        {
          title: '两端对齐',
          key: 'justifyFull'
        },
        {
          title: '间距'
        },
        {
          title: '链接'
        },
        {
          title: '图片'
        }
      ],
      text: ''
    }
  },
  methods: {
    uploadHtml (item) {
      let html = document.getElementsByClassName('editor')[0]
      let htmlContainerParent = document.createElement('div')
      let htmlContainer = document.createElement('div')

      htmlContainer.innerHTML = html.innerHTML
      htmlContainerParent.appendChild(htmlContainer)
      console.log(htmlContainerParent.innerHTML)

      this.execCommand(item)
    },
    execCommand (item) {
      let value = null
      if (item.key) {
        if (item.size) {
          value = item.size
        }
        document.execCommand(item.key, false, value)
      }
    }
  }
}
</script>

<style lang="scss">
.editor-wrap {
  border: 1px solid #dcdee2;
  border-radius: 4px;
  .action-wrap {
    font-size: 0;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid #dcdee2;
    background-color: #f8f8f9;
    ul {
      padding: 2px 5px;
      li {
        display: inline-block;
        vertical-align: top;
        span {
          display: block;
          overflow: hidden;
          box-sizing: content-box;
          height: 30px;
          cursor: pointer;
          white-space: nowrap;
          text-transform: capitalize;
          background-color: #f8f8f9;
          background-image: url('./../../../../assets/img/editor.png');
          background-repeat: no-repeat;
          background-size: 510px 60px;
        }
      }
    }
    .action-icon-1 {
      width: 30px;
      background-position: -5px 0;
      &:hover {
        background-position: -5px -30px;
      }
    }
    .action-icon-2 {
      width: 20px;
      background-position: -34px 0;
      &:hover {
        background-position: -34px -30px;
      }
    }
    .action-icon-3 {
      width: 25px;
      background-position: -55px 0;
      &:hover {
        background-position: -55px -30px;
      }
    }
    .action-icon-4 {
      width: 30px;
      background-position: -80px 0;
      &:hover {
        background-position: -80px -30px;
      }
    }
    .action-icon-5 {
      width: 10px;
      background-position: -110px 0;
      &:hover {
        background-position: -110px -30px;
      }
    }
    .action-icon-6 {
      width: 25px;
      background-position: -120px 0;
      &:hover {
        background-position: -120px -30px;
      }
    }
    .action-icon-7 {
      width: 25px;
      background-position: -145px 0;
      &:hover {
        background-position: -145px -30px;
      }
    }
    .action-icon-8 {
      width: 25px;
      background-position: -170px 0;
      &:hover {
        background-position: -170px -30px;
      }
    }
    .action-icon-9 {
      width: 25px;
      background-position: -196px 0;
      &:hover {
        background-position: -196px -30px;
      }
    }
    .action-icon-10 {
      width: 25px;
      background-position: -220px 0;
      &:hover {
        background-position: -220px -30px;
      }
    }
    .action-icon-11 {
      width: 25px;
      background-position: -245px 0;
      &:hover {
        background-position: -245px -30px;
      }
    }
    .action-icon-12 {
      width: 16px;
      background-position: -270px 0;
      &:hover {
        background-position: -270px -30px;
      }
    }
    .action-icon-13 {
      width: 25px;
      background-position: -286px 0;
      &:hover {
        background-position: -286px -30px;
      }
    }
    .action-icon-14 {
      width: 25px;
      background-position: -310px 0;
      &:hover {
        background-position: -310px -30px;
      }
    }
    .action-icon-15 {
      width: 25px;
      background-position: -336px 0;
      &:hover {
        background-position: -336px -30px;
      }
    }
    .action-icon-16 {
      width: 25px;
      background-position: -362px 0;
      &:hover {
        background-position: -362px -30px;
      }
    }
    .action-icon-17 {
      width: 25px;
      background-position: -386px 0;
      &:hover {
        background-position: -386px -30px;
      }
    }
    .action-icon-18 {
      width: 25px;
      background-position: -412px 0;
      &:hover {
        background-position: -412px -30px;
      }
    }
    .action-icon-19 {
      width: 15px;
      background-position: -436px 0;
      &:hover {
        background-position: -436px -30px;
      }
    }
    .action-icon-20 {
      width: 25px;
      background-position: -452px 0;
      &:hover {
        background-position: -452px -30px;
      }
    }
    .action-icon-21 {
      width: 25px;
      background-position: -476px 0;
      &:hover {
        background-position: -476px -30px;
      }
    }
  }
  .editor-box {
    position: relative;
    overflow-y: auto;
    box-sizing: border-box;
    width: 100%;
    max-height: 500px;
    background-color: #fff;
  }
  .editor {
    width: 100%;
    min-height: 200px;
    padding: 10px;
  }
}
</style>
