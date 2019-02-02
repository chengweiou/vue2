import service from '@/sdk/weaponService'
import uploadService from '@/sdk/uploadService'

const CLEAN_STATE = {
  total: 0,
  filter: { name: '', start: 0, limit: 0 },
  list: [],
  detail: {},
}

const state = { ...CLEAN_STATE }

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await uploadService.save({ file: payload.img })
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    payload.imgSrc = rest.data
    delete payload.img
    rest = await service.save(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    state.list.push({ ...payload, id: rest.data })
    commit('list', state.list)
    dispatch('modal/off', rest, { root: true })
  },
  async loadById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.loadById({ id: payload.id })
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('detail', rest.data)
  },
  reset({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('reset', 'REMOVE')
  },
  changeFilter({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('filter', state.filter)
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.count(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('total', rest.data)
  },
  async load({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.load(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
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
  reset(state, e) {
    state.filter = { ...CLEAN_STATE.filter }
    state.list = []
  },
  filter(state, e) {
    state.filter = e
  },
  list(state, e) {
    state.list = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
