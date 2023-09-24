/** @type {import('eslint-define-config').ESLintConfig} */
export default {
  overrides: [
    {
      files: ['**/package.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'private',
              'keywords',
              'description',
              'author',
              'license',
              'homepage',
              'repository',
              'files',
              'unpkg',
              'jsdelivr',
              'type',
              'module',
              'types',
              'exports',
              'bin',
              'packageManager',
              'main',
              'scripts',
              'peerDependencies',
              'dependencies',
              'devDependencies',
              'engines',
              'config',
              'husky',
              'lint-staged',
              'simple-git-hooks',
              'prettier',
              'stylelint',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
        ],
        'jsonc/sort-array-values': [
          'error',
          {
            pathPattern: '^files$',
            order: { type: 'asc' },
          },
        ],
      },
    },
  ],
}
