# vue3-admin

# 目录结构
```
dudao
├── public                        // 入口文件目录
│ ├── favicon.ico                 // 网页图标
│ └── index.html                  // 入口页面
├── dist                          // 打包后生成的目录
├── src                           // 源码目录
│ ├──  assets                     // 静态资源目录
│ │ ├── img                       // 图片库
│ │ ├── css                       // css库
│ │ └── js                        // js库
│ ├── components                  // 公共组件目录
│ │ ├── common                    // 全局组件目录
│ │ │ └── modules                 // 全局组件碎片库
│ │ └── pages                     // 子页面目录
│ ├──views                        // 主页面目录
│ ├──store                        // vuex目录
│ │ ├── index.js                  // vuex配置文件
│ │ └── modules                   // vuex模块库
│ ├── App.vue                     // 页面入口文件
│ ├── main.js                     // 程序入口文件
│ └── router.js                   // 路由配置文件
├── .gitignore                    // 上传忽略的文件格式
├── package.json                  // 项目基本信息
├── vue.config.js                 // vue配置
├── babel.config.js               // babel配置
└── README.md                     // 项目说明
```

### pages
  * pages为导航页面文件夹
  * 导航页面打开的子页面，需要新建子文件夹，命名规则为当前打开的页面名

### vuex
  * 事件以页面为标准，在vuex/modules下新建JS文件，文件名为页面名

## 公共组件
* 存放位置：`src/components/common/modules/`
* 命名规则：以中划线-分割,例:`label-box`

## 公用事件

###  子页面添加Tab标签/子页面跳转Tab标签
* 页面内使用
```
this.utils.addNewTabs(key)
```

* vuex内使用
```
this._vm.utils.addNewTabs(key)
```

* 所需字段
```
key: {
  breadcrumb:['第一级','第二级'],
  open:[menu类别索引],
  title: '标签名',
  link: '完整路由',
  options: '路由需要传递的参数'
}
```
### 子页面关闭Tab标签(只限关闭当前页面)
* 页面内使用
```
this.utils.closeTabs()
```

* vuex内使用
```
this._vm.utils.closeTabs()
```

