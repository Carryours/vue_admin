
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    render() {
        return (
            <div>
                <div>按钮</div>
                <a-button type="primary">Primary</a-button>
                ----
                <a-button>Default</a-button>----
                <a-button type="dashed">Dashed</a-button>---
                <a-button type="danger">Danger</a-button>
                {/* <a-config-provider :autoInsertSpaceInButton="false"> */}
                <a-button type="primary">按钮</a-button>
                <a-button type="link">Link</a-button>
            </div>
        )
    }
}
