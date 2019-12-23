import Vue from 'vue'
import router from './router'
import store from './store'
import '@/styles/index.styl'
import App from './App/index'
import {
  isUndef
} from 'rg-util'
// import './ui/antd/components/index_rogen.js'

import {
  Icon,
  Button
} from 'ant-design-vue'
Vue.use(Icon)
Vue.use(Button)



Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


console.log(isUndef(324))
