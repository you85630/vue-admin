<template>
  <div class="add-img">
    <p>选取图片：</p>
    <ul>
      <li v-for="(item, index) in imgList" :key="'item'+index" @click="setImage(item)">
        <img :src="item.img" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VmEditorAddimage',
  data () {
    return {
      imgList: [
        {
          img: 'https://you-img-box.oss-cn-shanghai.aliyuncs.com/img-1.jpeg'
        },
        {
          img: 'https://you-img-box.oss-cn-shanghai.aliyuncs.com/img-2.jpeg'
        },
        {
          img: 'https://you-img-box.oss-cn-shanghai.aliyuncs.com/img-3.jpeg'
        },
        {
          img: 'https://you-img-box.oss-cn-shanghai.aliyuncs.com/img-4.jpeg'
        },
        {
          img: 'https://you-img-box.oss-cn-shanghai.aliyuncs.com/img-5.jpeg'
        },
        {
          img: 'https://you-img-box.oss-cn-shanghai.aliyuncs.com/img-6.jpeg'
        },
        {
          img: 'https://you-img-box.oss-cn-shanghai.aliyuncs.com/img-7.jpeg'
        },
        {
          img: 'https://you-img-box.oss-cn-shanghai.aliyuncs.com/img-8.jpeg'
        },
        {
          img: 'https://you-img-box.oss-cn-shanghai.aliyuncs.com/img-9.jpeg'
        }
      ]
    }
  },
  methods: {
    setImage (item) {
      document.execCommand('insertImage', false, item.img)
    }
  }
}
</script>

<style lang="scss">
  .add-img {
    width: 200px;
    margin: 0;
    padding: 16px 0;
    p {
      padding: 0 16px;
    }
    ul {
      overflow-y: auto;
      width: 100%;
      max-height: 400px;
      padding: 0 16px;
      li {
        display: inline-block;
        overflow: hidden;
        width: 75px;
        height: 60px;
        margin-top: 10px;
        text-align: center;
        vertical-align: top;
        background-color: #f8f8f8;
        &:nth-child(2n) {
          margin-left: 10px;
        }
        img {
          width: auto;
          height: 100%;
          cursor: pointer;
        }
      }
    }

    input {
      opacity: 0;
    }
  }
</style>
