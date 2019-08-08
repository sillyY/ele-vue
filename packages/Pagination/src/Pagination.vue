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
    v-if='total>0' />
</template>
<script>
export default {
    name: 'Pagination',
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
    }
}
</script>
