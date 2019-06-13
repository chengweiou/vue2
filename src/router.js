import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routeList(),
})
function routeList() {
  const result = [
    /**
     * default: { name: ':folderName', path: '/:folderName', component: () => import('@/view/:folderName/index.vue')
     * write down specification config in here.
     */
    { name: 'home', path: '/', component: () => import('@/view/home') },
    { name: 'log', path: '/log', component: () => import('@/view/log') },
  ]
  const list = require.context('./view', true, /[A-Za-z0-9-_,\s]+\.vue$/i)
  list.keys().filter(e => e.includes('index')).forEach(e => {
    const matched = e.match(/([A-Za-z0-9-_]+)\/index\./i)
    if (!matched || matched.length <= 1) return
    if (result.find(e => e.name === matched[1])) return
    result.push({ name: matched[1], path: `/${matched[1]}`, component: list(e).default, meta: { module: true } })
  })
  return result
}
