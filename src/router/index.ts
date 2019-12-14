import Vue from 'vue'
import VueRouter, { RouterOptions, RouteConfig } from 'vue-router'
import { getRoutesBykey, ModulesKey } from './modules'


Vue.use(VueRouter)

const loginRoutes = getRoutesBykey(ModulesKey.Login)

console.log(loginRoutes)



const options: RouterOptions = {
  routes: loginRoutes
}
const router = new VueRouter(options)


router.onReady(() => {
  console.log('路由准备就绪')
}, err => {
  console.log('onReady', err)
})
router.onError((err) => {
  console.log('路由错误', err)
})


export default router
