# hexo-theme-acrylic-z
> Forked form hexo-theme-Acrylic/Hexo-Theme-Acrylic-Next, Add some of me own style.


基于[Hexo-Theme-Acrylic-Next](https://github.com/hexo-theme-Acrylic/Hexo-Theme-Acrylic-Next)修改的用于个人网站的Hexo主题

## 💻 安裝

<details>
<summary>Git 安裝</summary>

在博客根目录里安装稳定版【推荐】

```powershell
git clone -b main https://github.com/zhangyuhan2016/hexo-theme-acrylic-z.git themes/acrylic-z
```

在博客根目录里安装最新版【推荐】

```powershell
git clone -b dev https://github.com/zhangyuhan2016/hexo-theme-acrylic-z.git themes/acrylic-z
```

### 更好的配置
- macos/linux
在博客根目录运行
```bash
cp -rf ./themes/acrylic-z/_config.acrylic-z.yml ./_config.acrylic-z.yml
```
- windows
  复制```/themes/acrylic-z/_config.acrylic-z.yml```此文件到hexo根目录，并重命名为```_config.acrylic-z.yml```


</details>

### 安裝

```
# npm
npm i hexo-theme-acrylic-z

# yarn
yarn add hexo-theme-acrylic-z
```
#### 使用主题配置

因为当前主题配置与**Hexo深度合并策略**并不完美适应，默认主题配置全部处于注释状态。

需要在项目根目录新增 **_config.acrylic-z.yml** 并 Copy [_config.acrylic-z.yml](./_config.acrylic-z.yml) 内容。


## ⚙ 应用主题

修改hexo配置文件`_config.yml`，把主题改为`acrylic-z`

```
theme: acrylic-z
```

>如果你没有pug以及stylus的渲染器，请下载安装： ```npm install hexo-renderer-pug hexo-renderer-stylus --save```

## 如何贡献
> 该主题属于个人修改定制，不保证接受PR，提供参考意义较多。
> 
> 当然如果您有一些好的想法，欢迎您加入原本的Acrylic组织，贡献您的力量！


## 致谢原本的 hexo-theme-Acrylic 团队

