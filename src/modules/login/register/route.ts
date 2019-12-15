const mainRoute: Page.PageRouteConfig = {
    component: () => import( /* webpackChunkName: "register" */ './index'),
    // key: 'login',
}


//  登入的路由
export default mainRoute