开发必读
===

首先参看[Yilia源码目录结构及构建须知](https://github.com/litten/hexo-theme-yilia/wiki/Yilia%E6%BA%90%E7%A0%81%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E5%8F%8A%E6%9E%84%E5%BB%BA%E9%A1%BB%E7%9F%A5)。

我并不是专业前端，很多东西可能参考自己的一些习惯。有问题提Issue讨论。

一、前言
---

一些基本原则：
1. npm包版本使用npm管理，git管理代码版本。
1. 构建工作交给主题自身完成

二、目录结构
---

* `source` - Hexo加载主题资源的主目录，需要编译生成
* `source-src` - 源文件目录，编译到source目录
* `layout` - 模板目录
* `languages` - 语言配置目录

一般来说，如果你想修改页面的html，请到`layout`文件夹里直接修改；
如想修改css，js，请到`source-src`文件夹里，并通过后面介绍的开发步骤，编译到`source`里。

三、开发环境
---

你需要使用以下环境进行开发：

* `node` - 最新的LTS版本
* `npm`  - 最新的稳定版
* `ejs`  - 前端模板
* `sass` - css预编译
* `webpack` - 构建工具

四、开发步骤
---

1. **安装node+npm**

2. **安装依赖**
进入根目录，执行 `npm install`

3. **开发**
执行`npm run dev`
此时会用 webpack 打包，把文件编译到 source 文件里，但文件不会经过压缩

4. **发布**
执行`npm run build`
最终确定版本，此时的编译会经过压缩。
