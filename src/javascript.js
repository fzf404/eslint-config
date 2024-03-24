/** @type {import('eslint-define-config').ESLintConfig} */
export default {
  extends: ['plugin:import/recommended', 'plugin:unicorn/recommended'],
  rules: {
    'import/named': 'off',
    'import/no-unresolved': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
  },
}
