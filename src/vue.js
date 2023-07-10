const { getPackageInfoSync } = require('local-pkg')

const isVue2 = getPackageInfoSync('vue')?.version.startsWith('2')

/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      extends: [
        isVue2 ? 'plugin:vue/recommended' : 'plugin:vue/vue3-recommended',
      ],
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
