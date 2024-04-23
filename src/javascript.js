module.exports = {
  extends: ['plugin:unicorn/recommended'],
  rules: {
    'unicorn/no-null': 'off', // use undefined instead of null
    'unicorn/prefer-module': 'off', // only support ESM
    'unicorn/filename-case': 'off', // enforces file name
    'unicorn/prevent-abbreviations': 'off', // enforces variable name
    'unicorn/no-abusive-eslint-disable': 'off', // prohibited eslint disbale
    'unicorn/no-object-as-default-parameter': 'off', // no empty object
  },
}
