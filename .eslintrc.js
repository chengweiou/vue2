module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    // allow debugger during development
    'no-tabs': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
