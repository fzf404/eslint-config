const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('tailwindcss')
  ? {
      extends: ['plugin:tailwindcss/recommended'],
    }
  : {}
