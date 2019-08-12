<template>
    <el-pagination
    background
    @size-change='sizeCb'
    @current-change='pageCb'
    :current-page='currentPage'
    :page-sizes='pageSizes'
    :page-size='pageSize'
    :layout='layout'
    :total='total'
    :hide-on-single-page="total == 0" />
</template>
<script>
export default {
    name: 'Page',
    props:{
        layout: {
            type: String,
            default: 'total, prev, pager, next, sizes, jumper'
        },
        total: {
            type: Number,
            default: 0
        },
        pageSize: {
            type: Number,
            default: 20
        },
        pageSizes: {
            type: Array,
            default() {
                return [10, 20 ,30]
            }
        },
        currentPage: {
            type: Number,
            default: 1
        },
        sizeCb: {
            type: Function,
            default() {
                return function() {}
            }
        },
        pageCb: {
            type: Function,
            default() {
                return function() {}
            }
        }
    },
}
</script>
