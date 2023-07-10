const { readGitignoreFiles } = require('eslint-gitignore')

/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: ['eslint:recommended', './src/typescript.js', './src/vue.js', './src/tailwindcss.js', './src/prettier.js'],
  ignorePatterns: readGitignoreFiles(),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
