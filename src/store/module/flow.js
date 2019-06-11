import clone from '@/fn/util/clone'

const CLEAN_STATE = {
  cache: false,
  map: {
    register: { nextNameList: ['login', 'saveXXX'], info: { url: 'POST /andromeda/register', param: 'username, password' }, func: () => console.log('func') },
    login: { nextNameList: ['saveXXX'], info: { url: 'POST /andromeda/login', param: 'username, password' }, func: () => console.log('func') },
    saveXXX: { nextNameList: ['findByIdXXX', 'findXXX'], info: { url: 'POST /xxx/', param: 'name, date, phone' }, func: () => console.log('func') },
    deleteXXX: { nextNameList: ['saveXXX'], info: { url: 'DELETE /xxx/{id}', param: '' }, func: () => console.log('func') },
    putXXX: { nextNameList: ['findByIdXXX', 'findXXX'], info: { url: 'PUT /xxx/{id}', param: 'name | date | phone' }, func: () => console.log('func') },
    findByIdXXX: { nextNameList: ['deleteXXX', 'putXXX'], info: { url: 'GET /xxx/{id}', param: '' }, func: () => console.log('func') },
    findXXX: { nextNameList: ['deleteXXX', 'findByIdXXX'], info: { url: 'GET /xxx', param: 'k?, start?, limit?' }, func: () => console.log('func') },
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
  next({ commit, dispatch, state, rootState }, payload, config = {}) {
    let prevNum = payload.prevNum
    let curr = payload.curr
    let currList = []
    state.step.length = prevNum + 1
    curr.nextNameList.forEach(name => {
      let cp = clone(state.map[name])
      currList.push({ name: name, ...cp })
    })
    state.step.push(currList)
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
