<template>
  <div id='app'>
    <h1>Ele-Vue</h1>
    <el-button @click='setList'>111</el-button>
    <Table :layout='layout' :list='list'>
      <!-- <template v-slot:address='scope' >
        {{scope.slot.row.address}}
      </template> -->
      <template v-slot:operate v-slot:default="scope">
        <el-button @click="handleScope(scope)">编辑</el-button>
      </template>
    </Table>
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
          visible: true,
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
            // slot: 'address'
          },
        ]
      },
      list: []
    };
  },
  methods: {
    setList() {
      this.list = [
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
      ];
    },
    handleScope(v) {
      console.log(v)
    }
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
