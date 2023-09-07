import { isPackageExists } from 'local-pkg'

/** @type {import('eslint-define-config').ESLintConfig} */
export default {
  extends: isPackageExists('prettier')
    ? ['eslint-config-prettier', 'plugin:prettier/recommended']
    : [],
}
