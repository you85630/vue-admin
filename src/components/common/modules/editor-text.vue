<template>
  <div class="editor-text-wrap">
    <div class="action-wrap">
      <ul>
        <li v-for="(item, index) in actionList" :key="'item'+index"  :title="item.title">
          <span :class="'action-icon-'+(index+1)"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editor-text',
  data () {
    return {
      actionList: [
        {
          title: '粗体',
          icon: ''
        },
        {
          title: '斜体',
          icon: ''
        },
        {
          title: '中划线',
          icon: ''
        },
        {
          title: '下划线',
          icon: ''
        },
        {
          title: 'h1',
          icon: ''
        },
        {
          title: 'h2',
          icon: ''
        },
        {
          title: 'h3',
          icon: ''
        },
        {
          title: 'h4',
          icon: ''
        },
        {
          title: 'h5',
          icon: ''
        },
        {
          title: 'h6',
          icon: ''
        },
        {
          title: '无序列表',
          icon: ''
        },
        {
          title: '有序列表',
          icon: ''
        },
        {
          title: '左对齐',
          icon: ''
        },
        {
          title: '居中对齐',
          icon: ''
        },
        {
          title: '右对齐',
          icon: ''
        },
        {
          title: '两端对齐',
          icon: ''
        },
        {
          title: '链接',
          icon: ''
        },
        {
          title: '图片',
          icon: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-text-wrap {
  .action-wrap {
    li {
      position: relative;
      display: inline-block;
      width: 25px;
      height: 25px;
      cursor: pointer;
      vertical-align: top;
      span {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        border: 5px solid #fff;
        background-image: url('./../../../assets/img/editor.png');
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .action-icon-1 {
      background-position: 3px 0;
    }
    .action-icon-2 {
      background-position: -13px 0;
    }
    .action-icon-3 {
      background-position: -29px 0;
    }
    .action-icon-4 {
      background-position: -44px 0;
    }
    .action-icon-5 {
      background-position: -60px 2px;
    }
    .action-icon-6 {
      background-position: -75px 2px;
    }
    .action-icon-7 {
      background-position: -90px 2px;
    }
    .action-icon-8 {
      background-position: -105px 2px;
    }
    .action-icon-9 {
      background-position: -120px 2px;
    }
    .action-icon-10 {
      background-position: -135px 2px;
    }
    .action-icon-11 {
      background-position: -150px 4px;
    }
    .action-icon-12 {
      background-position: -165px 2px;
    }
    .action-icon-13 {
      background-position: -180px 2px;
    }
    .action-icon-14 {
      background-position: -195px 2px;
    }
    .action-icon-15 {
      background-position: -210px 2px;
    }
    .action-icon-16 {
      background-position: -225px 2px;
    }
    .action-icon-17 {
      background-position: -240px 2px;
    }
    .action-icon-18 {
      background-position: -255px 2px;
    }
  }
}
</style>
