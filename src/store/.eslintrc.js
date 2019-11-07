module.exports = {
  rules: {
    // inorder to keep template
    // { commit, dispatch, state, rootState }, payload, config = {}
    'no-unused-vars': 'off',
    'no-console': ['error', {allow: ['warn', 'error']}],
  },
}
