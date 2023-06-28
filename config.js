module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['eslint-plugin-prettier'],
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
