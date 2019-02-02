import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import util from './fn/util'

import date from './filter/date'
import number from './filter/number'
import phone from './filter/phone'

import './assets/css/global.css'

Vue.use(util)
Vue.filter('date', date)
Vue.filter('number', number)
Vue.filter('phone', phone)
Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
