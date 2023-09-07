import { isPackageExists } from 'local-pkg'

/** @type {import('eslint-define-config').ESLintConfig} */
export default {
  extends: isPackageExists('unocss') ? ['@unocss/eslint-config'] : [],
}
