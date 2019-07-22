<template>
  <div class='First'>
    <Table :layout='layout' :list='tableData' :curPage='1' />
  </div>
</template>
<script>
import Table from '@/components/Table';
export default {
  name: 'TableView',
  components: {
    Table
  },
  data() {
    return {
      layout: {
        isOrder: false,
        isSelected: false,
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
    };
  }
};
</script>

