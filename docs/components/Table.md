# Table 表格

## 基础表格

::: demo
<template>
<Table :layout='layout' :list='tableData' />
</template>

<script>
export default {
    data() {
        return {
            layout: {
                isLoading: false,
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
    }
}
</script>

<style>
button {
    color: blue;
}
</style>

:::
