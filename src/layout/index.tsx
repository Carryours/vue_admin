import { Component, Vue } from 'vue-property-decorator'

import { CreateElement } from 'vue'

import LayoutHeader from './components/layoutHeader'
import LayoutFooter from "./components/layoutFooter/index";
import LayoutContent from './components/layoutContent';

import './index.styl'
@Component
export default class Layout extends Vue {

    render(h: CreateElement) {
        return <div class='layout'>
            <LayoutHeader></LayoutHeader>
            <LayoutContent></LayoutContent>
            <LayoutFooter></LayoutFooter>
        </div>
    }
}
