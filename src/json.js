const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['plugin:jsonc/recommended-with-jsonc'],
  rules: {
    'jsonc/sort-array-values': [
      'error',
      {
        pathPattern: '^files$',
        order: { type: 'asc' },
      },
    ],
  },
})
