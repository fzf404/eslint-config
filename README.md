# @fzf404/eslint-config

[![npm](https://img.shields.io/npm/v/@fzf404/eslint-config?color=f03e3e)](https://npmjs.com/package/@fzf404/eslint-config)
[![star](https://img.shields.io/github/stars/fzf404/eslint-config?color=1c7ed6)](https://github.com/fzf404/eslint-config)
[![license](https://img.shields.io/npm/l/@fzf404/eslint-config?color=37b24d)](https://github.com/fzf404/eslint-config/blob/main/LICENSE)
[![language](https://img.shields.io/badge/language-简体中文-f76707)](https://github.com/fzf404/eslint-config)

My personal ESLint config ( 我的 ESLint 配置 )

## Features ( 特性 )

- Support ESM module ( 支持 ESM 模块 )
- Compatible with Prettier ( 兼容 Prettier )
- Support Vue and TypeScirpt ( 支持 Vue 和 TypeScript )
- Ignore `.gitignore` included files ( 忽略 `.gitignore` 包含的文件 )

## Usage ( 使用 )

1. Install `eslint` and `@fzf404/eslint-config` ( 安装 `eslint` 和 `@fzf404/eslint-config` )

```bash
npm i -D eslint @fzf404/eslint-config
```

2. Add config to `package.json` or `.eslintrc.json` ( 添加配置到 `package.json` 或 `.eslintrc.json`)

```jsonc
// package.json
"eslintConfig": {
  "extends": [
    "@fzf404/eslint-config"
  ]
}

// .eslintrc.json
{
  "extends": [
    "@fzf404/eslint-config"
  ]
}
```

3. Edit `package.json` scripts ( 编辑 `package.json` 脚本 )

```jsonc
// package.json
"scripts": {
  "lint": "eslint --cache --fix ."
}
```
