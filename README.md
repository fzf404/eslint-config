# @fzf404/eslint-config

[![npm](https://img.shields.io/npm/v/@fzf404/eslint-config?style=flat&color=f03e3e)](https://npmjs.com/package/@fzf404/eslint-config)
[![star](https://img.shields.io/github/stars/fzf404/eslint-config?style=flat&color=1c7ed6)](https://github.com/fzf404/eslint-config)
[![license](https://img.shields.io/npm/l/@fzf404/eslint-config?style=flat&color=37b24d)](https://github.com/fzf404/eslint-config/blob/main/LICENSE)
[![language](https://img.shields.io/badge/language-简体中文-f76707)](https://github.com/fzf404/eslint-config)

My personal ESLint config ( 我的 ESLint 配置 )

## Features ( 特性 )

- Support ESM ( 支持 ESM )
- Support Vue 3 ( 支持 Vue 3 )
- Support TypeScript ( 支持 TypeScript )
- Compatible Prettier 3 ( 兼容 Prettier 3 )
- Support Import order ( 支持 Import 排序 )
- Support UnoCSS order ( 支持 UnoCSS 排序 )
- Support Markdown format ( 支持 Markdown 格式化 )
- Support `packge.json` order ( 支持 `packge.json` 排序 )
- Ignore `.gitignore` include files ( 忽略 `.gitignore` 包含的文件 )

## Plugins ( 插件 )

- [eslint-gitignore](https://github.com/mysticatea/eslint-gitignore) - Git plugin ( Git 插件 )
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) - Vue plugin ( Vue 插件 )
- [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc) - JSON plugin ( JSON 插件 )
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) - Import validate ( Import 验证 )
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Prettier plugin ( Prettier 插件 )
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) - Powerful ESLint rules ( 实用 ESLint 规则 )
- [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown) - Markdown plugin ( Markdown 插件 )
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) - Import order ( Import 排序 )
- [@unocss/eslint-config](https://github.com/unocss/unocss/tree/main/packages/eslint-config) - UnoCSS plugin ( UnoCSS 插件 )
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint) - TypeScript plugin ( TypeScript 插件 )

## Install ( 安装 )

```bash
# npm
npm i -D eslint @fzf404/eslint-config

# yarn
yarn i -D eslint @fzf404/eslint-config

# pnpm
pnpm i -D eslint @fzf404/eslint-config
```

## Usage ( 使用 )

Edit `package.json` ( 编辑 `package.json` )

```jsonc
{
  "scripts": {
    "lint": "eslint --cache --fix .",
  },
  "eslintConfig": {
    "extends": ["@fzf404/eslint-config"],
  },
}
```

Edit `Visual Studio Code` Setting ( 编辑 `Visual Studio Code` 设置 )

```jsonc
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
  },
  "eslint.validate": ["vue", "json", "markdown", "javascript", "typescript"],
}
```
