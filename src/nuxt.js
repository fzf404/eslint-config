const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('nuxt')
  ? {
      extends: ['@nuxt/eslint-config'],
    }
  : {}
