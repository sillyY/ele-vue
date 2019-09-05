<template>
  <div id='app'>
    <h1>Ele-Vue</h1>
    <Table :layout='layout' :list='list' >
      <template #address='{scope}'>{{scope.row.address}}</template>
      <template #operate='{scope}'>
        <el-button @click='handleScope(scope)'>编辑</el-button>
      </template>
    </Table>
    <Page
      :total='page.total'
      :pageSize='page.pageSize'
      :currentPage='page.currentPage'
      :sizeCb='handleSizeCb'
      :pageCb='handlePageCb'
    />
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      layout: {
        border: true,
        select: true,
        index: true,
        stripe: true,
        operate: {
          visible: true
        },
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
            name: '地址',
            slot: 'address'
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
      page: {
        total: 4,
        currentPage: 1,
        pageSize: 20
      }
    };
  },
  methods: {
    handleSizeCb() {},
    handlePageCb() {}
  }
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
