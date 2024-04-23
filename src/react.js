const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('react')
  ? {
      extends: ['plugin:react/recommended'],
      settings: {
        react: {
          version: 'detect',
        },
      },
    }
  : {}
