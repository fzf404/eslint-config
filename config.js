const { readGitignoreFiles } = require('eslint-gitignore')

/** @type {import('eslint-define-config').ESLintConfig} */
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
