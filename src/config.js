import { readGitignoreFiles } from 'eslint-gitignore'

/** @type {import('eslint-define-config').ESLintConfig} */
export default {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    './nuxt.js',
    './vue.js',
    './json.js',
    './unocss.js',
    './import.js',
    './package.js',
    './markdown.js',
    './javascript.js',
    './typescript.js',
    './prettier.js',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: readGitignoreFiles(),
}
