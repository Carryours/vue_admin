import Button from './button';
import ButtonGroup from './button-group';
import Base from '../base';
import './style'    // 引入样式
Button.Group = ButtonGroup;

/* istanbul ignore next */
Button.install = function (Vue) {
  Vue.use(Base);
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default Button;
