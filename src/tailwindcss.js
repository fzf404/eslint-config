const { existsSync } = require('node:fs')

module.exports = existsSync('tailwind.config.js')
  ? {
      extends: ['plugin:tailwindcss/recommended'],
    }
  : {}
