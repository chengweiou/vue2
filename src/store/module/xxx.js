import service from '@/sdk/xxxService'
import clone from '@/fn/util/clone'

const CLEAN_STATE = {
  total: 0,
  filter: { name: '', start: 0, limit: 0 },
  list: [],
  detail: {},
}

const state = clone(CLEAN_STATE)

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.save(payload)
    if (rest.code !== 'OK') {
      return
    }
    state.list.push({ ...payload, id: rest.data })
    commit('list', state.list)
  },
  async findById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.findById({ id: payload.id })
    if (rest.code !== 'OK') {
      return
    }
    commit('detail', rest.data)
  },
  changeFilter({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('filter', { ...state.filter, payload })
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.count(state.filter)
    if (rest.code !== 'OK') {
      return
    }
    commit('total', rest.data)
  },
  async find({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.find(state.filter)
    if (rest.code !== 'OK') {
      return
    }
    commit('list', rest.data)
  },
  reset({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('reset', 'REMOVE')
  },
}

const mutations = {
  reset(state, e) {
    state = clone(CLEAN_STATE)
  },
  detail(state, e) {
    state.detail = e
  },
  total(state, e) {
    state.total = e
  },
  list(state, e) {
    state.list = e
  },
  filter(state, e) {
    state.filter = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
