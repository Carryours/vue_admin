

import Vue from 'vue'
import { default as Button } from './button';
// import './style'

Button.install(Vue)
// const components = [
//   Base,
//   Affix,
//   Anchor,
//   AutoComplete,
//   Alert,
//   Avatar,
//   BackTop,
//   Badge,
//   Breadcrumb,
//   Button,
//   Calendar,
//   Card,
//   Collapse,
//   Carousel,
//   Cascader,
//   Checkbox,
//   Col,
//   DatePicker,
//   Divider,
//   Dropdown,
//   Form,
//   Icon,
//   Input,
//   InputNumber,
//   Layout,
//   List,
//   LocaleProvider,
//   Menu,
//   Modal,
//   Pagination,
//   Popconfirm,
//   Popover,
//   Progress,
//   Radio,
//   Rate,
//   Row,
//   Select,
//   Slider,
//   Spin,
//   Statistic,
//   Steps,
//   Switch,
//   Table,
//   Transfer,
//   Tree,
//   TreeSelect,
//   Tabs,
//   Tag,
//   TimePicker,
//   Timeline,
//   Tooltip,
//   Upload,
//   Drawer,
//   Skeleton,
//   Comment,
//   ConfigProvider,
//   Empty,
// ];

// const install = function(Vue) {
//   components.map(component => {
//     Vue.use(component);
//   });

//   Vue.prototype.$message = message;
//   Vue.prototype.$notification = notification;
//   Vue.prototype.$info = Modal.info;
//   Vue.prototype.$success = Modal.success;
//   Vue.prototype.$error = Modal.error;
//   Vue.prototype.$warning = Modal.warning;
//   Vue.prototype.$confirm = Modal.confirm;
//   Vue.prototype.$destroyAll = Modal.destroyAll;
// };