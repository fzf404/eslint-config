const { isPackageExists } = require('local-pkg')
const { defineConfig } = require('eslint-define-config')

module.exports = isPackageExists('typescript')
  ? defineConfig({
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // allow require
        '@typescript-eslint/no-explicit-any': 'off', // allow any type
      },
    })
  : {}
