import Vue from 'vue'
import Vuex from 'vuex'

import cachePlugin from './plugin'
import dbPlugin from './dbPlugin'

import failBox from './module/failBox'
import modal from './module/modal'
import me from './module/me'
import weapon from './module/weapon'
import weaponDb from './module/weaponDb'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal, me, weapon, weaponDb, failBox,
  },
  plugins: [cachePlugin, dbPlugin],
})
