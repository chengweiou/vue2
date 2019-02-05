import Vue from 'vue'
import Vuex from 'vuex'

import plugin from './plugin'

import me from './module/me'
import xxx from './module/xxx'
import xxxDb from './module/xxxDb'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    me, xxx, xxxDb,
  },
  plugins: plugin,
})
