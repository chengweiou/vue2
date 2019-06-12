import clone from '@/fn/util/clone'

const CLEAN_STATE = {
  cache: false,
  map: {
  },
  step: [],
  first: '',
}

const state = clone(CLEAN_STATE)

const actions = {
  setMap({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('map', payload)
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
    curr.nextNameList.forEach(name => {
      let cp = clone(state.map[name])
      currList.push({ name: name, ...cp })
    })
    state.step.push(currList)
    if (curr.action) {
      let rest = await dispatch(curr.action, {}, { root: true })
      curr.info.result = rest
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
