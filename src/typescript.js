import { isPackageExists } from 'local-pkg'

/** @type {import('eslint-define-config').ESLintConfig} */
export default {
  overrides: isPackageExists('typescript')
    ? [
        {
          files: ['*.ts'],
          extends: ['plugin:@typescript-eslint/recommended'],
          rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/consistent-type-imports': 'error',
          },
        },
      ]
    : [],
}
