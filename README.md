Roon-Elfin-zh 是在 GhostChina 修改的官方主题 Roon-zh 基础上再做修改，主要针对中文用户。

预览效果可以到<a title="shixing" href="http://www.shixing.me/" target="_blank">我的博客</a>

官方新出的主题 <a title="Roon" href="https://github.com/TryGhost/Roon" target="_blank">Roon</a> 还是比较清爽简单的。我主要修改了以下几个地方：

* 响应式布局
* 主字体修改为 Helvetica Neue
* 替换icon字体为 <a title="Roon" href="http://fontawesome.io/icons/" target="_blank">font-awesome</a>
* 修改主题配色
* 增加侧边栏
* 增加标签云展示
* 增加回到顶部按钮
* 增加页面平滑滚动效果
* 增加语法高亮显示 <a title="highlight" href="https://highlightjs.org" target="_blank">highlight.js</a>

关于语法高亮：
装的是 highlight.js v8.4，默认我引用 `tomorrow.css` 样式，如有需要，可以到 `default.hbs` 里修改，样式文件在 `assets/css/highlight` 下

如果有喜欢的可以到我的 <a href="https://github.com/diorsky/roon-elfin-zh" target="_blank">GitHub</a> 下载，解压后复制到 [ghost pach]/content/themes下，重启 ghost 并在后台选择新主题即可。

或者通过Git，
```dos.bat
	cd [ ghost pach ]/content/themes
    git clone https://github.com/diorsky/roon-elfin-zh.git
```

可能遇到的错误：

提示无法git，则需要安装git
```dos.bat
	// For Ubuntu / Debian:
	sudo apt-get install git

	// For Centos:
	sudo yum install git
```
