# Guide
ELE-VUE is a secondary development based on Element, so you need to import Element first.
## Installation
### Element
<br>

Reference [official document](https://element.eleme.cn/#/zh-CN/component/installation)
### ELE-VUE
```
npm i ele-vue -S
```

## CDN  
<br>

The CDN of ELE-VUE can now be obtained through jsDelivr
```
<script src="https://cdn.jsdelivr.net/npm/ele-vue/lib/ele-vue.umd.min.js"></script>
```
## Get Start

### Import ELE-VUE
<br>

Write the following in main.js
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
### Start Use
<br>

At this point, the development environment of ELE-VUE has been set up, and then you can write the corresponding documentation according to the component documentation.