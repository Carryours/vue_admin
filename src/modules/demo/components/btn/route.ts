const mainRoute: Page.PageRouteConfig = {
    component: () => import( /* webpackChunkName: "demo/componets/btn" */ './index'),
    meta: {}
}

//  登入的路由
export default mainRoute
