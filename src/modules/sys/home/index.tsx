import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  title = "rogen";
  render() {
    let a = <div></div>;

    return (
      <div>
        <h1>首页</h1>
        <h1>{this.title}</h1>
      </div>
    );
  }
}
