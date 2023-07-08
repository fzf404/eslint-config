const { readGitignoreFiles } = require('eslint-gitignore')

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', './src/prettier.js', './src/typescript.js', './src/vue.js'],
  ignorePatterns: readGitignoreFiles(),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
