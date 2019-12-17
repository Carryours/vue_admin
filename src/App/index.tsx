import { Component, Vue } from 'vue-property-decorator';

import './app.less'

@Component
export default class App extends Vue {
    render() {
        return (
            <div class="app-main">
                <router-view />
            </div>
        )
        ////
    }
}

