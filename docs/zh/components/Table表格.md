# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

> 未完全实现Element所有特性, 适用于常见表格.

## 基本表格

::: code
``` tip
当`Table`元素注入了`layout`对象数组后, 可以在`props`属性中用`attr`对应`list`中的键名, 用`name`对应表头,
可以使用`width`属性来定义列宽.
```
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

## 自定义索引
::: code
``` tip
当`Table`元素注入了`layout`对象后, 可以在`props`属性中用`attr`对应`list`中的键名, 用`name`对应表头,
可以使用`width`属性来定义列宽.
```
```html
<template>
  <Table :layout="layout" :list="list" :indexMethod="indexMethod" />
</template>
<script>
  export default {
    data() {
      return {
        layout: {
          index: true,
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
    },
    methods: {
      indexMethod(index) {
        return index * 2
      }
    }
  }
</script>
```
:::

## 带斑马纹表格
::: code
``` tip
`stripe` 属性可以创建带斑马纹的表格。它接受一个 `Boolean` ，默认为`false `，设置为 `true` 即为启用。
```
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

## 带边框表格
::: code
``` tip
默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用 `border` 属性，它接受一个 `Boolean` ，设置为 `true` 即可启用。
```
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

## 带状态表格
::: code
``` tip
可以通过指定 Table 组件的 `tableRowClassName` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。
```
```html
<template>
  <Table :layout="layout" :list="list"  :tableRowClassName="setRowClassName" />
</template>
<script>
  export default {
    data() {
      return {
        layout: {
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
    },
    methods: {
      setRowClassName({ rowIndex }) {
        if (rowIndex === 1) {
          return "warning-row";
        } else if (rowIndex === 3) {
          return "success-row";
        }
        return "";
      }
    }
  }
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
</style>
```
:::

## 选择框表格
::: code
``` tip
`select` 属性可以带选择框的表格。它接受一个 `Boolean` ，默认为`false `，设置为 `true` 即为启用。  
通过Table组件的 `handleSelectionChange`属性, 可以获取选中项.
```
```html
<template>
  <Table :layout="layout" :list="list"  :handleSelectionChange="handleSelectionChange"/>
</template>
<script>
  export default {
    data() {
      return {
        layout: {
          select: true,
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
        ],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
```
:::

## 自定义列模板
> `slot` 插槽使用动态插槽名, 故仅支持Vue2.6+
::: code
``` tip
通过 `props` 中的 `slot` 指定索引, 通过 `#<slot>="{scope}" 获取数据，用法参考 demo。
```
```html
<template>
  <Table :layout="layout" :list="list" >
    <template #date="{scope}">
      <i class="el-icon-time"></i>
      <span style="margin-left: 10px">{{ scope.row.date }}</span>
    </template>
    <template #name="{scope}">
      <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
      </el-popover>
    </template>
    <template #operate="{scope}">
      <el-button
        size="mini"
        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      <el-button
        size="mini"
        type="danger"
        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
    </template>
  </Table>
</template>
<script>
  export default {
    data() {
      return {
        layout: {
          operate: {
            visible: true,
            width: 200
          },
          props: [
            {
              attr: 'date',
              name: '日期',
              slot: 'date'
            },
            {
              attr: 'name',
              name: '姓名',
              slot: 'name'
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
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
```
:::


## 属性
### Table 属性
| 参数     | 说明       | 类型      | 可选值        | 默认值   |
|--------|----------|-----|------------|-------|
| list   | 显示的数据    | array   | -          | -     |
| layout | 表格参数     | object  | -          | -     |
| isLoad | 是否显示加载动画 | boolean | true/false | false |
| indexMethod | 自定义索引函数 | Funciton(index) | - | - |
| tableRowClassName | 行的 className 的回调方法,也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | - | - |

### Table 事件
| 事件名                 | 说明                   | 参数 |
|-----------------------|-----------------------|------|
| handleSelectionChange | 当选择项发生变化时会触发该事件 | - |

### layout 属性
| 参数     | 说明       | 类型      | 可选值        | 默认值   |
|--------|----------|---------|------------|-------|
| style | style样式 | string | - | - |
| height | Table的高度 | string/number | - | - |
| maxHeight | Table的最大高度 | string/number | - | - |
| size | Table的尺寸 | string | medium/small/mini | medium|
| border | 是否显示边框 | boolean | true/false | false |
| stripe | 是否为斑马纹 | boolean | true/false | false |
| select | 是否显示选择 | boolean | true/false | false |
| index | 是否显示索引 | boolean | true/false | false | 
| operate | 操作区设置 | object | - | -|

### operate 属性
| 参数     | 说明       | 类型      | 可选值        | 默认值   |
|--------|----------|---------|------------|-------|
| visible | 是否显示操作区 | boolean | true/false | false | 
| width | 操作区宽度 | string/number | - | 100 |

