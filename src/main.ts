import Vue from "vue";

import router from './router'
// import store from './store'
import '@/styles/index.styl'
import App from './App/index'
// console.log(require('./test/a'))
import axios from 'axios'
// import abc from '../abc'
// console.log(require("root/a/abc"))
// console.log(test)
// import {
//     Icon,
//     Button,
//     message,
//     notification,
//     Modal
// } from 'ant-design-vue'
// Vue.use(Icon)
// Vue.use(Button)
// Vue.prototype.$message = message;
// Vue.prototype.$notification = notification;
// Vue.prototype.$info = Modal.info;
// Vue.prototype.$success = Modal.success;
// Vue.prototype.$error = Modal.error;
// Vue.prototype.$warning = Modal.warning;
// Vue.prototype.$confirm = Modal.confirm;

Vue.config.productionTip = false

window.vm = new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')
