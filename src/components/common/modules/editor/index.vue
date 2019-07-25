<template>
  <div class="editor-wrap">
    <Form ref="formItem" :model="formItem">
        <FormItem>
          <Input v-model="formItem.name" placeholder="请输入标题">
            <span slot="prepend">标题</span>
          </Input>
        </FormItem>
        <FormItem>
          <div class="action-wrap">
            <ul>
              <li v-for="(item, index) in actionList" :key="'item'+index" :title="item.title">
                <span :class="'action-icon-'+(index+1)"></span>
              </li>
            </ul>
          </div>
          <div class="editor-box">
            <editor-box v-model="text"></editor-box>
          </div>
        </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'editor-wrap',
  data () {
    return {
      actionList: [
        {
          title: '粗体'
        },
        {
          title: '斜体'
        },
        {
          title: '中划线'
        },
        {
          title: '下划线'
        },
        {
          title: '间距'
        },
        {
          title: 'h1'
        },
        {
          title: 'h2'
        },
        {
          title: 'h3'
        },
        {
          title: 'h4'
        },
        {
          title: 'h5'
        },
        {
          title: 'h6'
        },
        {
          title: '间距'
        },
        {
          title: '无序列表'
        },
        {
          title: '有序列表'
        },
        {
          title: '左对齐'
        },
        {
          title: '居中对齐'
        },
        {
          title: '右对齐'
        },
        {
          title: '两端对齐'
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
      formItem: {
        name: ''
      },
      text: ''
    }
  },
  components: {
    editorBox: () => import('./editor')
  }
}
</script>

<style lang="scss">
.editor-wrap {
  width: 80%;
  margin: 20px auto;
  .action-wrap {
    font-size: 0;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #dcdee2;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #f8f8f9;
    ul {
      padding: 0 5px;
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
    border: 1px solid #dcdee2;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #fff;
  }
}
</style>
