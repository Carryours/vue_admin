export const component = () => import( /* webpackChunkName: "layout" */ './index')

const mainRoute: Page.PageRouteConfig = {
    component,
    meta: {
        key: 'layout'
    }
}


export default mainRoute