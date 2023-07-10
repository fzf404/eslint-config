const { getPackageInfoSync } = require('local-pkg')

const isPrettier2 = getPackageInfoSync('prettier')?.version.startsWith('2')

/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  extends: ['eslint-config-prettier'],
  plugins: [
    isPrettier2 ? 'eslint-plugin-prettier-2' : 'eslint-plugin-prettier',
  ],
  rules: {
    [isPrettier2 ? 'prettier-2/prettier' : 'prettier/prettier']: 'error',
  },
}
