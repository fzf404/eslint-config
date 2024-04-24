const { isPackageExists } = require('local-pkg')

module.exports =
  isPackageExists('autoprefixer') && isPackageExists('tailwindcss')
    ? {
        extends: ['plugin:tailwindcss/recommended'],
      }
    : {}
