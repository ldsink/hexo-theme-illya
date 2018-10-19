hexo-theme-illya
================

[Illya](https://github.com/ldsink/hexo-theme-illya) has been forked from [Yilia](https://github.com/litten/hexo-theme-yilia) since 2018.10 and updated a lot.

—————————————————————

关于主题
---
1. 崇尚简约。
1. 专注内容。
1. 移动端响应式支持。
1. 激进兼容，只追求兼容稳定版Chrome。

近期计划
---
- [ ] 熟悉前端构建工具，先完善构建，测试，CI。
- [ ] 修复明显的BUG。
- [ ] 提升性能 & 参考 Yilia 内有价值的PR，增加功能。

主题外观
---

#### 常规
![常规](https://cloud.githubusercontent.com/assets/2024949/19027861/92879edc-8967-11e6-8e60-7987b6507c8d.gif)

#### 手机
![手机](https://cloud.githubusercontent.com/assets/2024949/19027020/1c5b756a-895f-11e6-99bf-ddff9687aee0.gif)

#### iPad横竖屏切换
![ipad横竖屏切换](https://cloud.githubusercontent.com/assets/2024949/19026392/e74e1816-8957-11e6-8f08-eac9b3c8c036.gif)

主题使用
---

#### 安装
在Hexo站点根目录，执行：
```bash
$ git clone git@github.com:ldsink/hexo-theme-illya.git themes/illya
```

#### 配置
配置文件模板在主题目录下的 [_config_template.yml](./_config_template.yml)。

1. `_config_template.yml`命名为`_config.yml`之后，请根据需要修改配置。
1. 修改hexo根目录下的 `_config.yml` ： `theme: illya`

#### 更新
```bash
cd themes/illya
git pull origin master
```

更新日志
---
详见[Changelog](./CHANGELOG.md)。

参与开发
---

为了性能和开发工程化考虑，[Illya](https://github.com/ldsink/hexo-theme-illya)使用webpack进行构建生成。
开始开发前，请阅读[开发必读](./docs/development.md)。

License
---
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for the full license text.

[Yilia](https://github.com/litten/hexo-theme-yilia) is licensed under the [ISC License](https://opensource.org/licenses/ISC).
