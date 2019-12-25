import { Component, Vue } from "vue-property-decorator";
import { Avatar, Badge } from "ant-design-vue";

@Component({
  components: {
    AAvatar: Avatar,
    ABadge: Badge
  }
})
export default class AvatarDemo extends Vue {
  render(h: typeof Vue.prototype.$createElement) {
    return (
      <div>
        <a-avatar icon="user" />
        <a-avatar>静静</a-avatar>
        <a-avatar>思思</a-avatar>
        <a-avatar>萌萌</a-avatar>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <a-avatar style="color: #f56a00; backgroundColor: #fde3cf">U</a-avatar>
        <a-avatar style="backgroundColor:#87d068" icon="user" />
        <span style="margin-right:24px">
          <a-badge count={1}>
            <a-avatar shape="square" icon="user" />
          </a-badge>
        </span>
      </div>
    );
  }
}
