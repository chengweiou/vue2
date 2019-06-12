import service from '@/sdk/xxxService'
import clone from '@/fn/util/clone'

const CLEAN_STATE = {
  cache: false,
  map: {
    init: { nextNameList: ['register'] },
    register: { desc: '注册', nextNameList: ['login'], dev: { url: 'POST /andromeda/register', param: 'username, password' }, action: '' },
    login: { desc: '登录', nextNameList: ['logout'], dev: { url: 'POST /andromeda/login', param: 'username, password' }, action: '' },
    logout: { desc: '登出', nextNameList: ['register', 'login'], dev: { url: 'POST /andromeda/logout', param: 'refreshToken' }, action: '' },
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
