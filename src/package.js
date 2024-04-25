module.exports = {
  overrides: [
    {
      files: ['**/package.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
          {
            pathPattern: '^(?:dev|peer)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
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
              'eslintConfig',
              'stylelint',
            ],
          },
        ],
      },
    },
  ],
}
