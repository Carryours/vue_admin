import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  render() {
    let a = <div></div>;

    return (
      <div>
        <h1>首页</h1>
        <h1>32424</h1>
      </div>
    );
  }
}
