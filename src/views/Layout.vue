<template>
  <el-container>
    <el-header class='header'>
      <h3>ElE-VUE</h3>
    </el-header>
    <el-container>
      <el-aside width='200px'>
        <el-menu
          :default-openeds='[1,2,3,4]'
          class='el-menu-vertical-demo'
          @open='handleOpen'
          @close='handleClose'
        >
          <el-submenu index='1'>
            <template slot='title'>
              <span>data</span>
            </template>
            <el-menu-item index='1-1'>
              <router-link to='/table' tag='li'>
                <a>Table</a>
              </router-link>
            </el-menu-item>
            <el-menu-item index='1-2'>选项2</el-menu-item>
            <el-menu-item index='1-3'>选项3</el-menu-item>
            <el-menu-item index='1-4'>选项4</el-menu-item>
          </el-submenu>
          <el-menu-item index='2'>
            <i class='el-icon-menu'></i>
            <span slot='title'>导航二</span>
          </el-menu-item>
          <el-menu-item index='3' disabled>
            <i class='el-icon-document'></i>
            <span slot='title'>导航三</span>
          </el-menu-item>
          <el-menu-item index='4'>
            <i class='el-icon-setting'></i>
            <span slot='title'>导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <keep-alive>
          <router-view />
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.middle {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header {
  @extend .middle;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  color: #409eff;
  border-bottom: solid 1px #e6e6e6;
}

.el-aside {
  height: 100vh;
  margin-top: 60px;
  ul {
    height: 100%;
    /* border-top: solid 1px #e6e6e6; */
  }
}
.el-main {
  margin-top: 60px;
}
</style>
