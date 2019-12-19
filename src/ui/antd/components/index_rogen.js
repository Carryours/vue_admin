

import Vue from 'vue'
import { default as Button } from './button';
import { default as Icon } from './icon';


// Button.install(Vue)
const components = [
    Button,
    Icon,
];

const install = function (Vue) {
    components.map(component => {
        Vue.use(component);
    });

    //   Vue.prototype.$message = message;
    //   Vue.prototype.$notification = notification;
    //   Vue.prototype.$info = Modal.info;
    //   Vue.prototype.$success = Modal.success;
    //   Vue.prototype.$error = Modal.error;
    //   Vue.prototype.$warning = Modal.warning;
    //   Vue.prototype.$confirm = Modal.confirm;
    //   Vue.prototype.$destroyAll = Modal.destroyAll;
};

install(Vue)
