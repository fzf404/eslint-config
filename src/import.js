const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:import/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/named': 'off', // verfied import (not support vue)
    'import/no-unresolved': 'off', // resolved import (not support vite)
  },
})
