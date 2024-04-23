const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('prettier')
  ? {
      extends: ['plugin:prettier/recommended'],
    }
  : {}
