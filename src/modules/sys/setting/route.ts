const mainRoute: Page.PageRouteConfig = {
    component: () => import( /* webpackChunkName: "sys/setting" */ './index'),
    meta: {}
}


//  登入的路由
export default mainRoute
