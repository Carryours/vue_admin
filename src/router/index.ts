import Vue from 'vue'
import VueRouter, {
  RouteConfig
} from 'vue-router'


import '@/modules/route'


import routesMap from '@/modules/route'
import mainRoute from '@/layout/route'

Vue.use(VueRouter)

console.log(routesMap)

mainRoute.children = [
  // ...routesMap['sys'],
  // ...routesMap['demo'],
]
for (let mKey in routesMap) {
  if (mKey === 'login') continue
  mainRoute.children = mainRoute.children.concat(routesMap[mKey])
}


let loginRoutes: RouteConfig[] = routesMap['login'].map(route => {
  route.path = `/${route.path}`
  return route
})
const options = {
  routes: [{
      path: '/',
      redirect: '/main/sys/home'
    },
    ...loginRoutes,
    mainRoute,
  ]
}
console.log(mainRoute);

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
