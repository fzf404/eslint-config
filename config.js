const { readGitignoreFiles } = require('eslint-gitignore')

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['eslint-plugin-prettier'],
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  ignorePatterns: readGitignoreFiles({ cwd: __dirname }),
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
