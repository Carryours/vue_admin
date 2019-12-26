import { Component, Vue } from "vue-property-decorator";
import { Alert } from "ant-design-vue";
@Component({
  components: {
    AAlert: Alert
  }
})
export default class Msg extends Vue {
  render(h: typeof Vue.prototype.$createElement) {
    return (
      <div>
        <a-button
          type="primary"
          onClick={() => this.$message.info("This is a normal message")}
        >
          Primary
        </a-button>
        <a-button
          onClick={() => {
            this.$message.success(
              "This is a prompt message for success, and it will disappear in 10 seconds",
              10
            );
          }}
        >
          Customized display duration
        </a-button>

        <a-button
          onClick={() => {
            // 输入的是0, 就需要手动关闭
            const hide = this.$message.loading("Action in progress..", 0);
            // setTimeout(() => {
            //   if (typeof hide === "function") hide();
            // }, 2000);
            // setTimeout(hide, 2500);
          }}
        >
          Display a loading indicator
        </a-button>

        <a-button
          onClick={() => {
            // this.$message
            //   .loading("Action in progress..", 2.5)
            //   .then(() => this.$message.success("Loading finished", 2))
            //   .then(() =>
            //     this.$message.info("Loading finished is finished", 3)
            //   );
          }}
        >
          Display a sequence of message
        </a-button>
      </div>
    );
  }
}
