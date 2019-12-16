const mainRoute: Page.PageRouteConfig = {
    component: () => import( /* webpackChunkName: "home" */ './index'),
    meta: {}
}


//  登入的路由
export default mainRoute
