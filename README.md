# [cloud-utils](https://github.com/windraxb/cloud-utils)
常用的 Javascript 工具类方法集合

## 目录介绍

```
.
├── example 使用example
├── dist 编译产出代码
├── docs 项目文档
├── src 源代码目录
├── test 单元测试
```

## 如何使用
通过 npm 下载安装代码

```bash
$ npm install --save @windraxb/cloud-utils
```

如果你是 node 环境

```js
var { formatDate } = require('@windraxb/cloud-utils.common');
```

如果你是 webpack 等环境

```js
import { formatDate } from '@windraxb/cloud-utils.esm';
```

如果你是 requirejs 环境

```js
requirejs(['node_modules/@windraxb/cloud-utils/dist/cloud-utils.js'], function (utils) {
    var formatDate = utils.formatDate;
})
```

如果你是浏览器环境

```html
<script src="node_modules/@windraxb/cloud-utils/dist/cloud-utils.min.js"></script>

<script>
    var utils = window['cloud-utils'];
</script>
```

## 文档
[API](https://windraxb.github.io/cloud-utils/)

## 贡献指南
首次运行需要先安装依赖

```bash
$ npm install
```
开发调试（利用 [rollup-watch](https://github.com/rollup/rollup-watch) ，自动监测源码变更，生成 `dist/cloud-utils.js`）
,在 `src/core` 添加相应的 `**.js` 文件，然后在 `src/main.js` 引用

```bash
$ npm run dev
```

添加测试用例

在 `src/test` 添加相应的测试用例文件， 命名遵循于 `**.spec.js` 规范

一键打包生成生产代码

```bash
$ npm run build
```
