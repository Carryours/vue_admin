import { Component, Vue } from "vue-property-decorator";
import { Icon } from "ant-design-vue";

@Component({
  components: {
    AIcon: Icon
  }
})
export default class IconDemo extends Vue {
  render() {
    return (
      <div style={{ fontSize: "38px" }}>
        <a-icon type="step-forward" />
      </div>
    );
  }
}
