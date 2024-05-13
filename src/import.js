module.exports = {
  extends: ['plugin:import/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'import/named': 'off', // verfied import (not support vue)
    'import/no-unresolved': 'off', // resolved import (not support vite)
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^node:'], [`^@?\\w`], ['^'], [`^\\.`], [`^\u0000`]],
      },
    ],
  },
}
