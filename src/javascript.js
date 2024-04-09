/** @type {import('eslint-define-config').ESLintConfig} */
export default {
  extends: ['plugin:import/recommended', 'plugin:unicorn/recommended'],
  rules: {
    'no-undef': 'off', // undefined variables ( not support nuxt)
    'import/named': 'off', // verfied import (not support vue)
    'import/no-unresolved': 'off', // resolved import (not support vite)
    'unicorn/no-null': 'off', // use undefined instead of null
    'unicorn/prefer-module': 'off', // only support ESM
    'unicorn/filename-case': 'off', // enforces file name
    'unicorn/prevent-abbreviations': 'off', // enforces variable name
    'unicorn/no-abusive-eslint-disable': 'off', // prohibited eslint disbale
    'unicorn/no-object-as-default-parameter': 'off', // no empty object
  },
}
