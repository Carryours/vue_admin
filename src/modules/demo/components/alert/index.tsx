import { Component, Vue } from "vue-property-decorator";
import { Alert } from "ant-design-vue";
@Component({
  components: {
    AAlert: Alert
  }
})
export default class AlertDemo extends Vue {
  render(h: typeof Vue.prototype.$createElement) {
    return (
      <div>
        <div style={{ width: "50%", margin: "0 auto" }}>
          {h(Alert, { props: { message: "Warning text", banner: true } })}
          <br />
          <a-alert
            message="Very long warning text warning text text text text text text text"
            banner
            // closable
          />
          <a-alert
            message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
            type="warning"
            closable
            onClose={() => {
              console.log(324242424342);
            }}
          />
          <br />
          <a-alert
            showIcon={false}
            message="Warning text without icon"
            banner
          />
          <br />
          <a-alert type="error" message="Error text" banner />
          <a-alert message="Success Text" type="success" />

          <a-alert
            message="Error Text"
            description="Error Description Error Description Error Description Error Description Error Description Error Description"
            type="error"
            closable
          />
          <a-alert
            message="Success Tips"
            description="Detailed description and advices about successful copywriting."
            type="success"
            showIcon
          />
        </div>
      </div>
    );
  }
}
