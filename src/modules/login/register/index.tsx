
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class Login extends Vue {
    created() {
        console.log('3242')
    }
    render() {
        return (
            <div>
                <h1>注册</h1>
            </div>
        )
    }
}