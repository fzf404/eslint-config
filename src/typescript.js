const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('typescript')
  ? {
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // allow require
        '@typescript-eslint/no-explicit-any': 'off', // allow any type
      },
    }
  : {}
