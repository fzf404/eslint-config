/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  overrides: [
    {
      files: ['**/package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'private',
              'description',
              'license',
              'type',
              'main',
              'module',
              'types',
              'exports',
              'bin',
              'files',
              'packageManager',
              'scripts',
              'peerDependencies',
              'dependencies',
              'devDependencies',
              'bundleDependencies',
              'optionalDependencies',
              'engines',
              'prettier',
              'eslintConfig',
              'husky',
              'lint-staged',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|bundled|optional)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
        ],
      },
    },
  ],
}
