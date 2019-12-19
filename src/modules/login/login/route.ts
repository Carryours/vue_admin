const mainRoute: Page.PageRouteConfig = {
    component: () => import( /* webpackChunkName: "login/login" */ './index'),
    meta: {}
}


//  登入的路由
export default mainRoute
