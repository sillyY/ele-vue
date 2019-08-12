
// 导入组件
import Page from './src/Page.vue'

// 为组件提供 install 安装方法，供按需引入
Page.install = function (Vue) {
  Vue.component(Page.name, Page)
}

// 默认导出组件
export default Page