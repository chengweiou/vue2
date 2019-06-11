import service from '@/sdk/xxxService'
import clone from '@/fn/util/clone'

const CLEAN_STATE = {
}

const state = clone(CLEAN_STATE)

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.save(payload)
    return rest
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.count(state.filter)
    return rest
  },
  async find({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.find(state.filter)
    return rest
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
