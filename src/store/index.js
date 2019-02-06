import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: moduleList(),
  plugins: pluginList(),
})

function moduleList() {
  const list = require.context('./module', true, /[A-Za-z0-9-_,\s]+\.js$/i)
  const result = {}
  list.keys().filter(e => !e.includes('index')).forEach(e => {
    const matched = e.match(/([A-Za-z0-9-_]+)\./i)
    if (!matched || matched.length <= 1) {
      return
    }
    const locale = matched[1]
    result[locale] = list(e).default
  })
  return result
}
function pluginList() {
  const list = require.context('./plugin', true, /[A-Za-z0-9-_,\s]+\.js$/i)
  const result = []
  list.keys().filter(e => !e.includes('index')).forEach(e => {
    const matched = e.match(/([A-Za-z0-9-_]+)\./i)
    if (!matched || matched.length <= 1) {
      return
    }
    result.push(list(e).default)
  })
  return result
}
