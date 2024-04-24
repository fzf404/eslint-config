const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('react')
  ? {
      overrides: [
        {
          files: ['*.jsx', '*.tsx'],
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
