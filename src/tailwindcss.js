/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
}
