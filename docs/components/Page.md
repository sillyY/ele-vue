# Page
If you have too much data to display in one page, use pagination.

## Basic usage
::: code
``` tip
Set layout with different pagination elements you wish to display separated with a comma. Pagination elements are: prev (a button navigating to the previous page), next (a button navigating to the next page), pager (page list), jumper (a jump-to input), total (total item count), size (a select to determine page size) and ->(every element after this symbol will be pulled to the right).
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

## Common usage
> UI exception is vuepress default setting content area width size problem, non-components.
::: code
```tip
Commonly used during development, layout is automatically set by default
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
        console.log(`${val} items per page`);
      },
      handlePageCb(val) {
        console.log(`current page: ${val}`);
      }
    }
  }
</script>
```
:::

## Attributes
### Page Attributes
| Attribute     | Description       | 	Type      | Accepted Values        | Default   |
|--------|----------|-----|------------|-------|
| pageSize | item count of each page | number | - | 20 |
| pageSizes | options of item count per page | array | - | [10, 20, 30]
| currentPage | current page number, supports the .sync modifier | number | -  | 1 |
| layout | layout of Pagination, elements separated with a comma | string | 	sizes, prev, pager, next, jumper, ->, total, slot | total, prev, pager, next, sizes, jumper |
| total | total item count | number | - | - |

### Page Events
| Event Name                 | Description                  | Parameters |
|-----------------------|-----------------------|------|
| sizeCb | triggers when `pageSize` changes | the new page size |
| pageCb | 	triggers when `currentPage` changes | the new current page |
