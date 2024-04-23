const { isPackageExists } = require('local-pkg')
const { defineConfig } = require('eslint-define-config')

module.exports = isPackageExists('react')
  ? defineConfig({
      extends: ['plugin:react/recommended'],
      settings: {
        react: {
          version: 'detect',
        },
      },
    })
  : {}
