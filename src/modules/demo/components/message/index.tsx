import { Component, Vue } from "vue-property-decorator";

@Component
export default class Msg extends Vue {
  render() {
    return (
      <div>
        <a-button
          type="primary"
          onClick={() => {
            this.$message.info("This is a normal message");
            this.$router;
          }}
        >
          Primary
        </a-button>
      </div>
    );
  }
}
