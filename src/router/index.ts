import Vue from 'vue'
import VueRouter, {
  RouterOptions,
} from 'vue-router'
import {
  getRoutesByKey,
  ModulesKey
} from './modules'


Vue.use(VueRouter)

// const loginRoutes = getRoutesByKey(ModulesKey.Login)
const mainRoute = getRoutesByKey(ModulesKey.Layout)[0]
mainRoute.children = getRoutesByKey(ModulesKey.Sys)
console.log(mainRoute);

const options: RouterOptions = {
  routes: [
    ...getRoutesByKey(ModulesKey.Login),
    mainRoute,
  ]
}
const router = new VueRouter(options)

router.beforeEach((from, to, next) => {
  console.log(to);

  next()
})
router.onReady(() => {
  console.log('路由准备就绪')
}, err => {
  console.log('onReady', err)
})
router.onError((err) => {
  console.log('路由错误', err)
})


export default router
