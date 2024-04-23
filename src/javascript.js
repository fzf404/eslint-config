module.exports = {
  extends: ['plugin:unicorn/recommended'],
  rules: {
    'unicorn/no-null': 'off', // allow null value
    'unicorn/prefer-module': 'off', // support common module
    'unicorn/filename-case': 'off', // force file name
    'unicorn/prevent-abbreviations': 'off', // force variable name
    'unicorn/no-object-as-default-parameter': 'off', // allow empty object
  },
}
