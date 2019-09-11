# Table
Display multiple data with similar format. You can sort, filter, compare your data in a table.

> All features of Element are not fully implemented and are suitable for common tables

## Common Table

::: code
``` tip
When the `Table` element is injected into the `layout` object, you can use `attr` in the `props` attribute to correspond to the key name in `list`, and use `name` to correspond to the header.
You can use the `width` attribute to define the column width.
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
              name: 'Date'
            },
            {
              attr: 'name',
              name: 'Name'
            },
            {
              attr: 'address',
              name: 'Address'
            }
          ]
        },
        list: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
      }
    }
  }
</script>
```
:::

## Striped Table
::: code
``` tip
Attribute `stripe` accepts a `Boolean`. If `true`, table will be striped.
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
              name: 'Date'
            },
            {
              attr: 'name',
              name: 'Name'
            },
            {
              attr: 'address',
              name: 'Address'
            }
          ]
        },
        list: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>
```
:::

## Table with border
::: code
``` tip
By default, Table has no vertical border. If you need it, you can set attribute `border` to `true`.
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
              name: 'Date'
            },
            {
              attr: 'name',
              name: 'Name'
            },
            {
              attr: 'address',
              name: 'Address'
            }
          ]
        },
        list: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>
```
:::

## Table with status
::: code
``` tip
You can add a class to a row in a Table by specifying the `tableRowClassName` property of the Table component, indicating that the row is in a certain state.
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
              name: 'Date'
            },
            {
              attr: 'name',
              name: 'Name'
            },
            {
              attr: 'address',
              name: 'Address'
            }
          ]
        },
        list: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
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

## Select Table
::: code
``` tip
The `select` attribute can have a table with a selection box. It accepts a `Boolean` with a default of `false ` and is set to `true` to enable it.
The selected item can be obtained through the `handleSelectionChange` property of the Table component.
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
              name: 'Date'
            },
            {
              attr: 'name',
              name: 'Name'
            },
            {
              attr: 'address',
              name: 'Address'
            }
          ]
        },
        list: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
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

## Custom column template
> The `slot` slot uses the dynamic slot name, so only Vue2.6+ is supported.
::: code
``` tip
Specify the index by `slot` in `props` and get the data by `#<slot>="{scope}".
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
              name: 'Date',
              slot: 'date'
            },
            {
              attr: 'name',
              name: 'Name',
              slot: 'name'
            }
          ]
        },
        list: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
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


##  Attributes
### Table  Attributes
| Attribute     | Description       | 	Type      | Accepted Values        | Default   |
|--------|----------|-----|------------|-------|
| list   | Table data    | array   | -          | -     |
| layout | Table attributes     | object  | -          | -     |
| isLoad | whether is loading | boolean | true/false | false |
| indexMethod | function that set table index | Funciton(index) | - | - |
| tableRowClassName | function that returns custom class names for a row, or a string assigning class names for every row | Function({row, rowIndex})/String | - | - |

### Table Events
| Event Name                 | Description                  | Parameters |
|-----------------------|-----------------------|------|
| handleSelectionChange | triggers when selection changes | - |

### layout Attributes
| Attribute     | Description       | 	Type      | Accepted Values        | Default   |
|--------|----------|---------|------------|-------|
| style | style attributes | string | - | - |
| height | Table's height | string/number | - | - |
| maxHeight | Table's max-height. | string/number | - | - |
| size | Table's size | string | medium/small/mini | medium|
| border | whether Table has vertical border	 | boolean | true/false | false |
| stripe | whether Table is striped | boolean | true/false | false |
| select | whether Table has select| boolean | true/false | false |
| index | whether Table has index | boolean | true/false | false | 
| operate | operate settings | object | - | -|

### operate Attributes
| Attribute     | Description       | 	Type      | Accepted Values        | Default   |
|--------|----------|---------|------------|-------|
| visible | whether Table has operate | boolean | true/false | false | 
| width | operate's width | string/number | - | 100 |

