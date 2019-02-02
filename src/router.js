import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { name: 'refresh', path: '/refresh', component: () => import('@/view/refresh') },
    { name: 'home', path: '/', component: () => import('@/view/home') },
    { name: 'weaponList', path: '/weapon', component: () => import('@/view/weapon/list') },
    { name: 'weapon', path: '/weapon/:id', component: () => import('@/view/weapon/detail') },
    { name: 'log', path: '/log', component: () => import('@/view/log') },
  ],
})
