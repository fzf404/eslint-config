/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  plugins: ['eslint-plugin-prettier'],
  extends: ['eslint-config-prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
