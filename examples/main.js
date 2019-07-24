import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import EleVue from '../packages/index'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(EleVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
