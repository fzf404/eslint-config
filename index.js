const { defineConfig } = require('eslint-define-config')
const { readGitignoreFiles } = require('eslint-gitignore')

module.exports = defineConfig({
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    // import lint
    './src/import.js',
    // farmework lint
    './src/nuxt.js',
    './src/vue.js',
    './src/react.js',
    // style lint
    './src/unocss.js',
    './src/tailwindcss.js',
    // common lint
    './src/javascript.js',
    './src/typescript.js',
    // file lint
    './src/json.js',
    './src/package.js',
    './src/markdown.js',
    // format lint
    './src/prettier.js',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  ignorePatterns: readGitignoreFiles(),
})
