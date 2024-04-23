const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('typescript')
  ? {
      overrides: [
        {
          files: ['*.ts'],
          plugins: ['@typescript-eslint'],
          parser: '@typescript-eslint/parser',
          extends: ['plugin:@typescript-eslint/recommended'],
          rules: {
            '@typescript-eslint/no-var-requires': 'off', // allow require
            '@typescript-eslint/no-explicit-any': 'off', // allow any type
          },
        },
      ],
    }
  : {}
