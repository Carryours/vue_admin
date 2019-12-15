
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class Login extends Vue {
    created() {
        console.log('3242')
    }
    render() {
        return (
            <div>
                <h1>登入</h1>
                <img alt="Vue logo" src={require('@/assets/logo.png')} />
                <div>32323</div>
                <h1>"324234" </h1>
            </div>
        )
    }
}