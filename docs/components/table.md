# Table 表格

## 基础表格

::: demo

```html
<template>
  <div class="box-vue">
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    {{ number }}
    <table :layout="layout" :list="tableData" :curPage="1" />
  </div>
</template>
<script>
  export default {
    data() {
        return {
            number: 0,
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
        }
    },
    methods: {
      plus () { this.number++ },
      minus () { this.number-- }
    }
  }
</script>
<style>
  .box-vue {
    color: red;
  }
</style>
```

:::
