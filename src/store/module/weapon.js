import service from '@/sdk/xxxService'
import clone from '@/fn/util/clone'

const CLEAN_STATE = {
  map: {
    saveWeapon: { nextNameList: ['findByIdWeapon', 'findWeapon'], info: { url: 'POST /weapon/', param: 'name, date, phone' }, action: 'weapon/save' },
    deleteWeapon: { nextNameList: ['saveWeapon'], info: { url: 'DELETE /weapon/{id}', param: '' }, action: '' },
    updateWeapon: { nextNameList: ['findByIdWeapon', 'findWeapon'], info: { url: 'PUT /weapon/{id}', param: 'name | date | phone' }, action: 'weapon/update' },
    findByIdWeapon: { nextNameList: ['deleteWeapon', 'updateWeapon'], info: { url: 'GET /weapon/{id}', param: '' }, action: 'weapon/findById' },
    findWeapon: { nextNameList: ['deleteWeapon', 'findByIdWeapon'], info: { url: 'GET /weapon', param: 'k?, start?, limit?' }, action: 'weapon/find' },
  },
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
}

export default {
  namespaced: true, state, actions, mutations,
}
