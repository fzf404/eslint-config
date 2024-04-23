const { isPackageExists } = require('local-pkg')

module.exports = isPackageExists('vue')
  ? {
      extends: ['plugin:vue/vue3-recommended'],
      rules: {
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
      },
    }
  : {}
