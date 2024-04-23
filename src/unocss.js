const { isPackageExists } = require('local-pkg')
const { defineConfig } = require('eslint-define-config')

module.exports = isPackageExists('unocss')
  ? defineConfig({
      extends: ['@unocss/eslint-config'],
    })
  : {}
