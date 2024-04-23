const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('vue')
  ? {
      overrides: [
        {
          files: ['*.vue'],
          parser: 'vue-eslint-parser',
          extends: ['plugin:vue/vue3-recommended'],
          parserOptions: {
            parser: '@typescript-eslint/parser',
          },
          rules: {
            'vue/no-v-html': 'off',
            'vue/require-default-prop': 'off',
            'vue/multi-word-component-names': 'off',
          },
        },
      ],
    }
  : {}
