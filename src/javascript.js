/** @type {import('eslint-define-config').ESLintConfig} */
export default {
  extends: ['plugin:import/recommended', 'plugin:unicorn/recommended'],
  rules: {
    'import/named': 'off',
  },
}
