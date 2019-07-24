<template>
  <el-table
    :data='list'
    v-loading='loading'
    :border='layout.isBorder? false: true '
    @selection-change='handleSelectionChange'
    size='medium'
  >
    <!-- selection -->
    <el-table-column v-if='layout.isSelect ? true: false' type='selection'></el-table-column>
    <!-- index -->
    <el-table-column
      type='index'
      :index='indexMethod'
      label='序号'
      align='center'
      width='80px'
      v-if='layout.isOrder? true : false'
    />
    <!-- handle -->
    <el-table-column
      fixed='right'
      label='操作'
      align='center'
      :width='layout.operateOption && layout.operateOptions.width ? layout.operateOptions.width : 100'
      v-if='layout.hasOperate? true: false'
    >
      <template slot-scope='scope'>
        <slot :props='scope' name='handle'></slot>
      </template>
    </el-table-column>

    <!-- prop -->
    <el-table-column
      v-for='(col,cid) in layout.props'
      :key='cid'
      :prop='col.attr'
      :label='col.name'
      :sortable='col.sortable'
      align='center'
      :width='col.width'
    >
      <template slot-scope='scope'>
        <el-row v-if='col.slot'>
          <slot :props='scope' :name='col.slot'></slot>
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
        return 0; // 设为0用于监听loading
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
      return this.list && this.curPage > 0 ? false : true;
    }
  },
  methods: {
    indexMethod(idx) {
      return (this.curPage - 1) * this.pageSize + idx + 1;
    }
  }
};
</script>