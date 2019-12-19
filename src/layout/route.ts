import {
    RouteConfig
} from 'vue-router'

export const component = () => import( /* webpackChunkName: "common/layout" */ './index')

const mainRoute: RouteConfig = {
    path: '/main',
    component,
    meta: {
        key: 'layout'
    }
}

export default mainRoute
