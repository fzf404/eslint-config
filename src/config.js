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
    './vue.js',
    './json.js',
    './package.js',
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
