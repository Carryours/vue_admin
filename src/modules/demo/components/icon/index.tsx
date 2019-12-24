import { Component, Vue } from "vue-property-decorator";
import { Icon } from "ant-design-vue";

// const Iconfont = {
//   functional: true,
//   name: 'AIconfont',
//   props: Icon.props,
//   render(h, context) {
//     const { props, slots, listeners, data } = context;
//     const { type, ...restProps } = props;
//     const slotsMap = slots();
//     const children = slotsMap.default;
//     // component > children > type
//     let content = null;
//     if (type) {
//       content = <use {...{ attrs: { 'xlink:href': `#${type}` } }} />;
//     }
//     if (children) {
//       content = children;
//     }
//     const iconProps = mergeProps(extraCommonProps, data, { props: restProps, on: listeners });
//     return <Icon {...iconProps}>{content}</Icon>;
//   },
// };

// const IconFont = Icon.createFromIconfontCN({
//   scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js" // 在 iconfont.cn 上生成
// });
@Component({
  components: {
    AIcon: Icon
    // IconFont: IconFont
  }
})
export default class IconDemo extends Vue {
  render() {
    return (
      <div style={{ fontSize: "38px" }}>
        <div>
          {/* <icon-font type="icon-tuichu" />
          <icon-font type="icon-facebook" />
          <icon-font type="icon-twitter" /> */}

          <a-icon type="step-forward" />
          <a-icon type="fast-backward" />
          <a-icon type="up-circle" />
          <a-icon type="dingding" />
          <a-icon type="html5" />
          <a-icon type="right-square" />
          <a-icon type="up-circle" />
          <a-icon type="smile" theme="twoTone" />
          <a-icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
          <a-icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
        </div>
        <div>
          <a-icon theme="filled" type="html5"></a-icon>
          <a-icon theme="filled" type="right-square"></a-icon>
        </div>
      </div>
    );
  }
}
