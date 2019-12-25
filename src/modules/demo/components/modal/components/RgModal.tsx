import { Component, Vue } from "vue-property-decorator";
import { Modal } from "ant-design-vue";

@Component({
  components: {
    AModal: Modal
  }
})
export default class ModalDemo extends Vue {
  private visible = true;
  private loading = false;
  constructor() {
    super();
  }
  show() {
    this.visible = true;
  }
  render(h: typeof Vue.prototype.$createElement) {
    return (
      <a-modal
        title="标题"
        visible={this.visible}
        onOk={() => {
          this.loading = true;
          setTimeout(() => {
            this.visible = false;
            this.loading = false;
          }, 2000);
        }}
        onCancel={() => {
          this.visible = false;
          this.loading = false;
        }}
        confirmLoading={this.loading}
      >
        <p>{"Content of the modal"}</p>
        <p>{"Content of the modal"}</p>
        <p>{"Content of the modal"}</p>
        <p>{"Content of the modal"}</p>
        <p>{"Content of the modal"}</p>
        <p>{"Content of the modal"}</p>
      </a-modal>
    );
  }
}
