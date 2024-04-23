const { isPackageExists } = require('local-pkg')
const { defineConfig } = require('eslint-define-config')

module.exports = isPackageExists('prettier')
  ? defineConfig({
      extends: ['plugin:prettier/recommended'],
    })
  : {}
