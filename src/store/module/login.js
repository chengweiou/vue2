import service from '@/sdk/xxxService'
import clone from '@/fn/util/clone'

const CLEAN_STATE = {
  cache: false,
  map: {
    register: { nextNameList: ['login'], info: { url: 'POST /andromeda/register', param: 'username, password' }, action: '' },
    login: { nextNameList: ['logout'], info: { url: 'POST /andromeda/login', param: 'username, password' }, action: '' },
    logout: { nextNameList: ['register', 'login'], info: { url: 'POST /andromeda/logout', param: 'refreshToken' }, action: '' },
  },
}

const state = clone(CLEAN_STATE)

const actions = {
  async register({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.register(state.filter)
    return rest
  },
  async login({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.login(payload)
    return rest
  },
  async logout({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await service.logout(state.filter)
    return rest
  },
}

const mutations = {
}

export default {
  namespaced: true, state, actions, mutations,
}
