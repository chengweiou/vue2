import clone from '@/fn/util/clone'

const CLEAN_STATE = {
  cache: false,
  map: {
  },
  step: [],
  first: 'init',
}

const state = clone(CLEAN_STATE)

const actions = {
  init({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('map', payload || state.first)
    dispatch('reset')
  },
  setFirst({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('first', payload)
    dispatch('reset')
  },
  reset({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('reset')
    dispatch('next', { curr: { nextNameList: [state.first] }, prevNum: -1 })
  },
  async next({ commit, dispatch, state, rootState }, payload, config = {}) {
    let prevNum = payload.prevNum
    let curr = payload.curr
    let currList = []
    state.step.length = prevNum + 1
    curr.nextNameList.filter(name => name).forEach(name => {
      if (!state.map[name]) console.warn(`can not find map: ${curr.name} --> ${name}`)
      let cp = clone(state.map[name])
      cp.desc = cp.desc || name
      currList.push({ name: name, dev: {}, ...cp })
    })
    state.step.push(currList)
    if (curr.action) {
      let rest = await dispatch(curr.action, curr.dev.param, { root: true })
      curr.dev.result = rest
    }
  },
}

const mutations = {
  map(state, e) {
    state.map = clone(e)
  },
  reset(state, e) {
    state.step = []
  },
  first(state, e) {
    state.first = e
  },
  step(state, e) {
    state.step = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
