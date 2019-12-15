import Vue from 'vue'
import router from './router'
import store from './store'
import '@/styles/index.styl'

import App from './App/index'

Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')