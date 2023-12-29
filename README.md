# @fzf404/eslint-config

[![npm](https://img.shields.io/npm/v/@fzf404/eslint-config?color=f03e3e)](https://npmjs.com/package/@fzf404/eslint-config)
[![star](https://img.shields.io/github/stars/fzf404/eslint-config?color=1c7ed6)](https://github.com/fzf404/eslint-config)
[![license](https://img.shields.io/npm/l/@fzf404/eslint-config?color=37b24d)](https://github.com/fzf404/eslint-config/blob/main/LICENSE)
[![language](https://img.shields.io/badge/language-简体中文-f76707)](https://github.com/fzf404/eslint-config)

My personal ESLint config ( 我的 ESLint 配置 )

## Features ( 特性 )

- ESM module ( ESM 模块 )
- UnoCSS order ( UnoCSS 排序 )
- Markdown format ( Markdown 格式化 )
- JavaScript Strict ( JavaScript 严格 )
- Prettier 3 compatible ( Prettier 3 兼容 )
- Vue 3 and TypeScript ( Vue 3 和 TypeScript )
- Import / Export order ( Import / Export 排序 )
- `.gitignore` ignore ( `.gitignore` 忽略 )
- `packge.json` order ( `packge.json` 排序 )

## Plugins ( 插件 )

- Vue plugin ( Vue 插件 ) [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
- JSON plugin ( JSON 插件 ) [eslint-plugin-json](https://github.com/ota-meshi/eslint-plugin-jsonc)
- UnoCSS plugin ( UnoCSS 插件 ) [@unocss/eslint-config](https://github.com/unocss/unocss/tree/main/packages/eslint-config)
- Markdown plugin ( Markdown 插件 ) [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown)
- Prettier plugin ( Prettier 插件 ) [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- Gitignore plugin ( Gitignore 插件 ) [eslint-gitignore](https://github.com/mysticatea/eslint-gitignore)
- TypeScript plugin ( TypeScript 插件 ) [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
- Import order ( Import 排序 ) [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- Import validate ( Import 验证 ) [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- Powerful ESLint rules ( 实用 ESLint 规则 ) [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Install ( 安装 )

```bash
npm i -D eslint @fzf404/eslint-config
```

## Usage ( 使用 )

Edit `package.json` ( 编辑 `package.json` )

```json
{
  // scripts
  "scripts": {
    "lint": "eslint --cache --fix ."
  },
  // eslint config
  "eslintConfig": {
    "extends": ["@fzf404/eslint-config"]
  }
}
```

Edit `Visual Studio Code` Setting ( 编辑 `Visual Studio Code` 设置 )

```json
{
  // auto lint
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  // validate files
  "eslint.validate": ["vue", "json", "markdown", "javascript", "typescript"]
}
```
