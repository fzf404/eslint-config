const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('react')
  ? {
      overrides: [
        {
          files: ['*.ts', '*.tsx'],
          extends: ['plugin:react/recommended'],
          settings: {
            react: {
              version: 'detect',
            },
          },
        },
      ],
    }
  : {}
