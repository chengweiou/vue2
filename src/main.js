import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import util from './fn/util'

import date from './filter/date'
import number from './filter/number'
import phone from './filter/phone'

Vue.use(util)
Vue.filter('date', date)
Vue.filter('number', number)
Vue.filter('phone', phone)
Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
