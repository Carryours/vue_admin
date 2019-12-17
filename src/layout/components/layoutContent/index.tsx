import { Component, Vue } from 'vue-property-decorator'

import './index.styl'

@Component
export default class LayoutContent extends Vue {
    render() {
        return <div class='layout-content'>
            <div>
                <router-view />
            </div>
        </div>
    }
}
