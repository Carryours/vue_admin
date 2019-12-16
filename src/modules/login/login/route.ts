const mainRoute: Page.PageRouteConfig = {
    component: () => import( /* webpackChunkName: "login" */ './index'),
    meta: {}
}


//  登入的路由
export default mainRoute
