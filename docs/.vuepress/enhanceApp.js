import { Rate, Badge, Button, Tag, Checkbox, Card, Timeline,TimelineItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(Rate)
  Vue.use(Badge)
  Vue.use(Button)
  Vue.use(Tag)
  Vue.use(Checkbox)
  Vue.use(Card)
  Vue.use(Timeline)
  Vue.use(TimelineItem)
}