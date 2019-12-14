import { Component, Vue } from 'vue-property-decorator';


@Component
export default class Layout extends Vue {

    render() {
        return <div id="app">
            <img alt="Vue logo" src={require('./assets/logo.png')} />
        </div>
    }
}
