# 指南
ele-vue是基于Element而做的二次开发,故需先引入Element.
## 安装
### 安装element
<br>

参考[官方文档](https://element.eleme.cn/#/zh-CN/component/installation)
### 安装ele-vue
```
npm i ele-vue -S
```

## CDN  
<br>

目前可以通过jsDelivr 获取ele-vue的CDN
```
<!-- 引入组件库 -->
<script src="https://cdn.jsdelivr.net/npm/ele-vue/lib/ele-vue.umd.min.js"></script>
```
## 快速上手

### 引入ele-vue
<br>

在main.js中写入以下内容
```
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EleVue from '../packages/index'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(EleVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
```
### 开始使用
<br>

至此,ele-vue的开发环境已经搭建完成,接下来就可以根据组件文档编写相应的文档了.