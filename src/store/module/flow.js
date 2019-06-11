import clone from '@/fn/util/clone'

const CLEAN_STATE = {
  cache: false,
  map: {
    register: { nextNameList: ['login', 'saveWeapon'], info: { url: 'POST /andromeda/register', param: 'username, password' }, action: '' },
    login: { nextNameList: ['saveWeapon'], info: { url: 'POST /andromeda/login', param: 'username, password' }, action: '' },
    saveWeapon: { nextNameList: ['findByIdWeapon', 'findWeapon'], info: { url: 'POST /weapon/', param: 'name, date, phone' }, action: 'weapon/save' },
    deleteWeapon: { nextNameList: ['saveWeapon'], info: { url: 'DELETE /weapon/{id}', param: '' }, action: '' },
    updateWeapon: { nextNameList: ['findByIdWeapon', 'findWeapon'], info: { url: 'PUT /weapon/{id}', param: 'name | date | phone' }, action: 'weapon/update' },
    findByIdWeapon: { nextNameList: ['deleteWeapon', 'updateWeapon'], info: { url: 'GET /weapon/{id}', param: '' }, action: 'weapon/findById' },
    findWeapon: { nextNameList: ['deleteWeapon', 'findByIdWeapon'], info: { url: 'GET /weapon', param: 'k?, start?, limit?' }, action: 'weapon/find' },
  },
  step: [],
  first: '',
}

const state = clone(CLEAN_STATE)

const actions = {
  setFirst({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('first', payload)
    dispatch('reset')
  },
  reset({ commit, dispatch, state, rootState }, payload, config = {}) {
    state.step = []
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
  reset(state, e) {
    state = clone(CLEAN_STATE)
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
