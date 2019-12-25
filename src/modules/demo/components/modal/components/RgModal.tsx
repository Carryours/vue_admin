import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Modal } from "ant-design-vue";

@Component({
  components: {
    AModal: Modal
  }
})
export default class ModalDemo extends Vue {
  private visible = false;
  private loading = false;
  // @Prop() v!: boolean;
  // @Watch("v")
  // onChange(newVal: boolean) {
  //   this.visible = newVal;
  // }
  constructor() {
    super();
  }
  show() {
    this.visible = true;
  }
  render(h: typeof Vue.prototype.$createElement) {
    let params = {
      props: {
        title: "jiewfneww",
        width: 800,
        closable: false,
        maskClosable: false,
        visible: this.visible,
        confirmLoading: this.loading
      },
      on: {
        ok: () => {
          this.loading = true;
          setTimeout(() => {
            this.visible = false;
            this.loading = false;
          }, 2000);
        },
        cancel: () => {
          this.visible = false;
          this.loading = false;
        }
      }
    };
    return (
      <a-modal
        // {...{ params }}
        title="标题"
        width={800}
        closable={false}
        maskClosable={false}
        visible={this.visible}
        confirmLoading={this.loading}
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
