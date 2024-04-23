const { isPackageExists } = require('local-pkg')
const { defineConfig } = require('eslint-define-config')

module.exports = isPackageExists('tailwindcss')
  ? defineConfig({
      extends: ['plugin:tailwindcss/recommended'],
    })
  : {}
