import Vue from 'vue'
import Vuex from 'vuex'

import cachePlugin from './plugin'

import xxx from './module/xxx'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    xxx,
  },
  plugins: [cachePlugin],
})
