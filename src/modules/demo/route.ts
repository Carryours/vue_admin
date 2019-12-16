import {
    RouteConfig
} from 'vue-router'

const routes: RouteConfig[] = []

const reg = new RegExp(/^\.\/(.+)\/route.ts$/)

const routeContext = require.context('./', true, /^\.\/(.+)\/route.ts$/) // 匹配所有的模块根目录路由
routeContext.keys().forEach(key => {
    if (!reg.test(key)) return
    const routeConfig = routeContext(key).default
    let path = RegExp.$1
    let copy = Object.assign({}, routeConfig, {
        path,
    })
    routes.push(copy)
})

export default routes
