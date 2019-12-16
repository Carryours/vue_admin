import {
    RouteConfig
} from "vue-router"

const routesMap: {
    [key: string]: RouteConfig[]
} = {}

const moduleContext = require.context('./', true, /\.\/\w*\/route.ts$/) // 匹配所有的模块根目录路由

moduleContext.keys().forEach(key => {
    const mRoutes = moduleContext(key).default
    let mKey = key.split('/')[1] // 模块key
    mRoutes.forEach((route: RouteConfig) => {
        route.path = `${mKey}/${route.path}`
        route.meta.mKey = mKey
    })
    routesMap[mKey] = mRoutes
})

export default routesMap
