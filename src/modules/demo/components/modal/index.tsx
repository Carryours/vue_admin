import { Component, Vue } from "vue-property-decorator";
import { Modal } from "ant-design-vue";
import RgModal from "./components/RgModal";
import { VNode } from "vue/types/umd";

@Component({
  components: {
    AModal: Modal
  }
})
export default class ModalDemo extends Vue {
  private visible = false;
  private confirmLoading = false;
  private mList: VNode[] = [];
  private mMap: { [key: string]: VNode } = {};
  private v: boolean = false;
  private showRgModal() {
    let a = this.mMap.a;
    if (!a) {
      a = this.mMap.a = this.$createElement(RgModal, { props: { v: this.v } });
      this.mList.push(a);
    } else {
      let c = a.componentInstance;
      c && c.show && c.show();
    }
    // this.v = true;
  }
  render(h: typeof Vue.prototype.$createElement) {
    return (
      <div>
        <a-button type="primary" onClick={() => (this.visible = true)}>
          Open Modal with async logic
        </a-button>
        <a-modal
          title="标题"
          visible={this.visible}
          onOk={() => {
            this.confirmLoading = true;
            setTimeout(() => {
              this.visible = false;
              this.confirmLoading = false;
            }, 2000);
          }}
          onCancel={() => (this.visible = false)}
          confirmLoading={this.confirmLoading}
        >
          <p>{"Content of the modal"}</p>
        </a-modal>

        <a-button
          onClick={() => {
            this.$confirm({
              title: "Do you want to delete these items?",
              content:
                "When clicked the OK button, this dialog will be closed after 1 second",
              onOk() {
                return new Promise((resolve, reject) => {
                  setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log("Oops errors!"));
              },
              onCancel() {}
            });
          }}
        >
          Confirm
        </a-button>

        <a-button onClick={this.showRgModal}>rogen </a-button>
        {this.mList}
      </div>
    );
  }
}
