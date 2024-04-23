const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('unocss')
  ? {
      extends: ['@unocss/eslint-config'],
    }
  : {}
