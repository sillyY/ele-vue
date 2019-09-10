# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

> 未完全实现Element所有特性,只适用于常见表格

## 基本表格

::: code
```html
<template>
  <Table :layout="layout" :list="list" />
</template>
<script>
  export default {
    data() {
      return {
        layout: {
          stripe: false,
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
          ]
        },
        list: [
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
    }
  }
</script>
```
:::

## 带斑马纹表格
::: code
```html
<template>
  <Table :layout="layout" :list="list" />
</template>
<script>
  export default {
    data() {
      return {
        layout: {
          stripe: true,
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
          ]
        },
        list: [
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
    }
  }
</script>
```
:::

### 带边框表格
::: code
```html
<template>
  <Table :layout="layout" :list="list" />
</template>
<script>
  export default {
    data() {
      return {
        layout: {
          border: true,
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
          ]
        },
        list: [
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
    }
  }
</script>
```
:::

### 带状态表格
::: code
```html
<template>
  <Table :layout="layout" :list="list" />
</template>
<script>
  export default {
    data() {
      return {
        layout: {
          rowClassName: '
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
          ]
        },
        list: [
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
    }
  }
</script>
```
:::