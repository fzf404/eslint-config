const { isPackageExists } = require('local-pkg')
const { defineConfig } = require('eslint-define-config')

module.exports = isPackageExists('vue')
  ? defineConfig({
      extends: ['plugin:vue/vue3-recommended'],
      rules: {
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
      },
    })
  : {}
