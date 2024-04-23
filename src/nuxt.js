const { isPackageExists } = require('local-pkg')
const { defineConfig } = require('eslint-define-config')

module.exports = isPackageExists('nuxt')
  ? defineConfig({
      extends: ['@nuxt/eslint-config'],
    })
  : {}
