开发必读
===

Copy from Yilia Wiki [Yilia源码目录结构及构建须知](https://github.com/litten/hexo-theme-yilia/wiki/Yilia%E6%BA%90%E7%A0%81%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E5%8F%8A%E6%9E%84%E5%BB%BA%E9%A1%BB%E7%9F%A5)

## 一、前言

出于对Hexo本身一些限制的思考，Yilia于2016九月进行了源码目录结构整理。
这些限制是我不太满意的地方，但既然世界观如此，我们只能在接受的基础上搞搞事情。

主要为：

**1. 主题应该用npm管理而不是git**

npm作为比较成熟的包管理工具，是大势所趋，比git会更稳定和方便

**2. 构建工作交给主题更合适**

Hexo本身的构建虽然做了很多工作，但是无法适应所有开发者的要求
比如我需要用ES6开发，压缩合并js等

## 二、目录结构

* ``source`` - Hexo加载主题资源的主目录，需要编译生成
* ``source-src`` - 源文件目录，编译到source目录
* ``layout`` - 模板目录
* ``languages`` - 语言配置目录

一般来说，如果你想修改页面的html，请到``layout``文件夹里直接修改；
如想修改css，js，请到``source-src``文件夹里，并通过后面介绍的开发步骤，编译到``source``里。

## 三、开发环境

你需要使用以下环境进行开发：

* ``node`` - 0.4.2以上
* ``npm``  - 3.0.0以上
* ``ejs``  - 前端模板
* ``sass`` - css预编译
* ``webpack`` - 构建工具

## 四、开发步骤

1. **安装node+npm**

2. **安装依赖**
进入根目录，执行 ``npm install``

3. **开发**
执行``npm run dev``
此时会用webpack打包，把文件编译到source文件里，但文件不会经过压缩

4. **发布**
执行``npm run dist``
最终确定版本，此时的编译会经过压缩。
