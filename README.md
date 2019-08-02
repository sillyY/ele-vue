<h1 align="center">Welcome to ele-vue 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/npm/v/ele-vue.svg">
  <a href="MIT">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> 基于 Element-UI 开发的小型组件库

## Install

```sh
npm install -s ele-vue
```

## Components

### Table

- Attr:

```
indexMethod: Function // 自定义索引
handleSelectionChange: Function // 多选选中
layout: {
  border: Booean, // 边框
  stripe: Booean, // 斑马纹
  rowClassName: String //带状态表格
  style: String // 样式
  height: String // 高度
  maxHeight: String // 最大高度
  select: Boolean, // 多选
  index: Boolean // 索引
  size: String // 大小,
  operate: { // 操作区
    visible: Boolean // 显隐
    width: Stirng, // 宽度
  }
  props: [
    {
      attr: String // 属性
      name: String // 名称
      sortable: Boolean // 排序
      width: String //宽度
      fixed: String, Boolean // 固定在左侧或右侧
      align: String // 对齐方式
      slot: String // 插槽名
    },
  ]
},
list: Array // 数据
```

- 操作

```
// 操作区演示
<Table> // 省略属性
  <template v-slot:operate='scope'>
    <el-button>{{scope.slot.row.name}}</el-button>
  </template>
</Table>
```

- 普通

```
<Table> // 省略属性
  <template v-slot:address='scope'>
    {{scope.slot.row.address}}
  </template>
</Table>
```

## Next to do

- Docs ❗️❗️❗️
- Pagination
- Upload
- Download
- QRCode
- More...

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [sillyy](https://github.com/sillyy).<br />
This project is [MIT](MIT) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
