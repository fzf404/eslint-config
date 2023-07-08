/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      extends: ['plugin:vue/recommended'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
            },
          },
        ],
      },
    },
  ],
}
