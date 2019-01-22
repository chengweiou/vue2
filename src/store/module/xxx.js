import service from '@/sdk/xxxService'

const CLEAN_STATE = {
  total: 0,
  filter: { name: '', start: 0, limit: 0 },
  list: [],
  detail: {},
}

const state = { ...CLEAN_STATE }

const actions = {
  async loadById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.loadById({ id: payload.id })
    if (rest.code !== 'SUCCESS') {
      return
    }
    commit('detail', rest.data)
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.count(state.filter)
    if (rest.code !== 'SUCCESS') {
      return
    }
    commit('total', rest.data)
  },
  async load({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.load(state.filter)
    if (rest.code !== 'SUCCESS') {
      return
    }
    commit('list', rest.data)
  },
}

const mutations = {
  detail(state, e) {
    state.detail = e
  },
  total(state, e) {
    state.total = e
  },
  list(state, e) {
    state.list = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
