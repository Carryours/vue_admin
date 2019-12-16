import Router, {
    RouteConfig
} from 'vue-router'

type RequireContext = __WebpackModuleApi.RequireContext

type PageRouteConfig = Page.PageRouteConfig

import {
    isPlainObject,
    isFun
} from '@/libs'



export enum ModulesKey {
    Login = "login", Layout = 'main', Sys = 'sys',
}

const routeConfigsMap: {
    [key: string]: Array < RouteConfig >
} = {}


/**
 * 根据key值获取路由列表
 */
export function getRoutesByKey(key: ModulesKey): Array < RouteConfig > {
    let value = routeConfigsMap[key]
    if (value) return value

    switch (key) {
        case ModulesKey.Login: {
            let list = getLoginRoutes()
            routeConfigsMap[key] = list
            return list
        }
        case ModulesKey.Layout: {
            let list = getLayoutRoutes()
            routeConfigsMap[key] = list
            return list
        }
        case ModulesKey.Sys: {
            let list = getSysRoutes()
            routeConfigsMap[key] = list
            return list
        }
    }
    return []
}


function getLayoutRoutes(): RouteConfig[] {
    let route = require('@/layout/route').default
    let list: RouteConfig[] = [
        Object.assign({}, route, {
            path: `/${ModulesKey.Layout}`
        })
    ]
    return list
}

/**
 * 获取登入模块的路由
 */
function getLoginRoutes(): Array < RouteConfig > {
    const context: RequireContext = require.context('@/modules/login', true, /\/route.ts$/)
    return parseContext(context, ModulesKey.Login)
}


function getSysRoutes(): Array < RouteConfig > {
    const context: RequireContext = require.context('@/modules/sys', true, /\/route.ts$/)
    return parseContext(context, ModulesKey.Sys, false)
}

function parseContext(context: RequireContext, moduleKey: ModulesKey, slash: Boolean = true) {
    let keys = context.keys()
    let list: Array < RouteConfig > = []
    keys.forEach(key => {
        let routes = context(key).default

        if (isPlainObject(routes)) {
            routes = [routes]
        } else if (!Array.isArray(routes)) {
            throw new Error(routes)
        }
        let pathBlocks: string[] = key.split('/') // 路径块列表
        pathBlocks.shift()
        pathBlocks.pop()
        if (pathBlocks.length === 0) return
        routes.forEach((route: PageRouteConfig) => {
            let meta = route.meta || {}
            meta.moduleKey = moduleKey
            meta.pathBlocks = pathBlocks

            let path = `${slash?'/': ''}${moduleKey}/${pathBlocks.join('/')}`

            let copy: RouteConfig = Object.assign({}, route, {
                path,
                meta,
            })
            list.push(copy)
        })

    })
    return list


}
