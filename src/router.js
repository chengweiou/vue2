import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { name: 'home', path: '/', component: () => import('@/view/home') },
    { name: 'detail', path: '/detail', component: () => import('@/view/detail') },
    { name: 'log', path: '/log', component: () => import('@/view/log') },
  ],
})
