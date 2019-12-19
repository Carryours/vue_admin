const mainRoute: Page.PageRouteConfig = {
    component: () => import( /* webpackChunkName: "login/register" */ './index'),
    // key: 'login',
    meta: {}
}


//  登入的路由
export default mainRoute
