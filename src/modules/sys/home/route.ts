const mainRoute: Page.PageRouteConfig = {
    component: () => import( /* webpackChunkName: "sys/home" */ './index'),
    meta: {}
}


//  登入的路由
export default mainRoute
