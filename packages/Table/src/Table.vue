<template>
  <el-table
    v-loading='loading'
    :data='list'
    :border='layout.border'
    :stripe='layout.stripe'
    :row-class-name='layout.rowClassName'
    :style='layout.style'
    height='layout.height'
    max-height='layout.maxHeight'
    @selection-change='handleSelectionChange'
    :size="layout.size?layout.size: 'medium'"
  >
    <!-- selection -->
    <el-table-column v-if='layout.select' type='selection'></el-table-column>
    <!-- index -->
    <el-table-column
      type='index'
      :index='indexMethod'
      label='序号'
      align='center'
      width='80px'
      v-if='layout.index? true : false'
    />
    <!-- handle -->
    <el-table-column
      fixed='right'
      label='操作'
      align='center'
      :width='layout.operate && layout.operate.width ? layout.operate.width : 100'
      v-if='layout.operate && layout.operate.visible'
    >
      <template slot-scope='scope'>
        <slot :scope='scope' name='operate'></slot>
      </template>
    </el-table-column>

    <!-- prop -->
    <el-table-column
      v-for='(col,cid) in layout.props'
      :key='cid'
      :prop='col.attr'
      :label='col.name'
      :sortable='col.sortable ?true: false'
      :width='col.width'
      :fixed='col.fixed'
      :align="col.align?col.align:'center'"
    >
      <template slot-scope='scope'>
        <el-row v-if='col.slot'>
          <slot :scope='scope' :name='col.slot'></slot>
        </el-row>
        <el-row v-else>{{scope.row[col.attr]}}</el-row>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'Table',
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
      required: true
    },
    curPage: {
      type: Number,
      default() {
        return 1; // 设为0用于监听loading
      }
    },
    pageSize: {
      type: Number,
      default() {
        return 20;
      }
    },
    layout: {
      type: Object,
      default() {
        return {};
      },
      required: true
    },
    handleSelectionChange: {
      type: Function,
      default() {
        return function() {};
      }
    }
  },
  computed: {
    loading() {
      return this.list && this.list.length ? false : true;
    }
  },
  methods: {
    indexMethod(idx) {
      return (this.curPage - 1) * this.pageSize + idx + 1;
    }
  }
};
</script>