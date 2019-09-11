# Page 分页
当数据量过多时，使用分页分解数据。

## 基础用法
::: code
``` tip
设置layout，表示需要显示的内容，用逗号分隔，布局元素会依次显示。prev表示上一页，next为下一页，pager表示页码列表，除此以外还提供了jumper和total，size和特殊的布局符号->，->后的元素会靠右显示，jumper表示跳页元素，total表示总条目数，size用于设置每页显示的页码数量。
```
``` html
<template>
  <Page
      :total="page.total"
      :layout="layout"
    />
</template>
<script>
  export default {
    data() {
      return {
        layout: "prev, pager, next",
        page: {
          total: 1000,
        }
      }
    }
  }
</script>
```
:::

## 常见用法
> UI 异常 是 vuepress 默认设定内容区宽度大小问题,非组件之过.
::: code
```tip
开发时常见使用方式,layout自动由默认值设定
```
``` html
<template>
      <Page
      :total="page.total"
      :pageSize="page.pageSize"
      :currentPage="page.currentPage"
      :sizeCb="handleSizeCb"
      :pageCb="handlePageCb"
    />
</template>
<script>
  export default {
    data() {
      return {
        page: {
          total: 1000,
          pageSize: 20,
          currentPage: 1
        }
      }
    },
    methods: {
      handleSizeCb(val) {
        console.log(`每页 ${val} 条`);
      },
      handlePageCb(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
```
:::

## 属性
### Page 属性
| 参数     | 说明       | 类型      | 可选值        | 默认值   |
|--------|----------|-----|------------|-------|
| pageSize | 每页显示条目个数 | number | - | 20 |
| pageSizes | 每页显示个数选择器的选项设置 | array | - | [10, 20, 30]
| currentPage | 当前页数 | number | -  | 1 |
| layout | 组件布局，子组件名用逗号分隔 | string | 	sizes, prev, pager, next, jumper, ->, total, slot | total, prev, pager, next, sizes, jumper |
| total | 总条目数 | number | - | - |

### Page 事件
| 事件名                 | 说明                   | 回调参数 |
|-----------------------|-----------------------|------|
| sizeCb | pageSize 改变时会触发 | 每页页数 |
| pageCb | 	currentPage 改变时会触发 | 当前页 |
