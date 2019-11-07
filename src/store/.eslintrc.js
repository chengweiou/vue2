module.exports = {
  rules: {
    // inorder to keep template
    // { commit, dispatch, state, rootState }, payload, config = {}
    'no-unused-vars': 'off',
    // show message for fetchUtil in predev
    'no-console': ['error', {allow: ['warn', 'error']}],
  },
}
