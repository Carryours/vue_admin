import { Component, Vue } from "vue-property-decorator";
import { Modal } from "ant-design-vue";

declare module "vue/types/vue" {
  interface Vue {
    confirmLoading: Boolean;
    visible: Boolean;
  }
}

@Component({
  components: {
    AModal: Modal
  }
})
export default class ModalDemo extends Vue {
  data() {
    return {
      visible: false,
      confirmLoading: false
    };
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
      </div>
    );
  }
}
