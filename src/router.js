import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { name: 'home', path: '/', component: () => import('@/view/flow/list') },
    { name: 'weapon', path: '/weapon', component: () => import('@/view/weapon') },
    { name: 'login', path: '/login', component: () => import('@/view/login') },
    { name: 'xxxList', path: '/xxx', component: () => import('@/view/xxx/list') },
    { name: 'xxx', path: '/xxx/:id', component: () => import('@/view/xxx/detail') },
    { name: 'log', path: '/log', component: () => import('@/view/log') },
  ],
})
