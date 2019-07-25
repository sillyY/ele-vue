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

- Table

```
<template>
  <div class='First'>
    <Table :layout='layout' :list='tableData' :curPage='1' />
  </div>
</template>
<script>
export default {
  name: 'TableView',
  data() {
    return {
      layout: {
        isOrder: false, 
        isSelected: false, 
        props: [
          {
            attr: 'date',
            name: '日期'
          },
          {
            attr: 'name',
            name: '姓名'
          },
          {
            attr: 'address',
            name: '地址'
          }
        ],
        hasOperate: false
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    };
  }
};
</script>
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
