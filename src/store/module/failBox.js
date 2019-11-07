const CLEAN_STATE = {
  cache: false,
  show: false,
  name: '',
  content: '',
}

const state = { ...CLEAN_STATE }

const actions = {
  async onRest({ commit, dispatch, state, rootState }, payload, config = {}) {
    if (payload.code === 'UNAUTHORIZED') {
      dispatch('me/logout', {}, { root: true })
    }
    let content = getContent(payload.code)
    commit('show', true)
    commit('content', content)
  },
  async off({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('show', false)
    commit('content', { name: '', content: '' })
  },
}

const mutations = {
  show(state, e) {
    state.show = e
  },
  content(state, e) {
    state.name = e.name
    state.content = e.content
  },
}

function getContent(code) {
  switch (code) {
    case '-1': return { name: 'Connection fail', content: 'Due to dev, server down, page not found... Due to prod, network error' }
    case 'UNAUTH': return { name: 'Unauth to continue', content: 'token needed' }
    case 'PARAM': return { name: 'Input param erorr', content: 'unchecked param sent to server' }
    case 'FAIL': return { name: 'Operation Fail', content: '' }
    default: return { name: code }
  }
}

export default {
  namespaced: true, state, actions, mutations,
}
