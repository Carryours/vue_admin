
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    render() {
        return (
            <div>
                <div>
                    <a-button type="primary">Primary</a-button>
                    ----
                    <a-button>Default</a-button>----
                    <a-button type="dashed">Dashed</a-button>---
                    <a-button type="danger">Danger</a-button>
                    {/* <a-config-provider :autoInsertSpaceInButton="false"> */}
                    <a-button type="primary">按钮</a-button>
                    <a-button type="link">Link</a-button>
                </div>
                <h4>Basic</h4>
                <a-button-group>
                    <a-button>Cancel</a-button>
                    <a-button type="primary">OK</a-button>
                </a-button-group>
                <a-button-group>
                    <a-button disabled>L</a-button>
                    <a-button disabled>M</a-button>
                    <a-button disabled>R</a-button>
                </a-button-group>
                <a-button-group>
                    <a-button type="primary">L</a-button>
                    <a-button>M</a-button>
                    <a-button>M</a-button>
                    <a-button type="dashed">R</a-button>
                </a-button-group>

            </div>
        )
    }
}
