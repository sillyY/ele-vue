# 指南
ELE-VUE是基于Element而做的二次开发,故需先引入Element.
## 安装
### 安装Element
<br>

参考[官方文档](https://element.eleme.cn/#/zh-CN/component/installation)
### 安装ELE-VUE
```
npm i ele-vue -S
```

## CDN  
<br>

目前可以通过jsDelivr 获取ELE-VUE的CDN
```
<script src="https://cdn.jsdelivr.net/npm/ele-vue/lib/ele-vue.umd.min.js"></script>
```
## 快速上手

### 引入ELE-VUE
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

至此,ELE-VUE的开发环境已经搭建完成,接下来就可以根据组件文档编写相应的文档了.