export const install = {}

install.node = `
title 安装 node
# 在 node 官网下载安装 nodeJs
------
	https://www.chungold.com/my/course/32 webpack学习网站
	https://nodejs.org/en/ 英文官网
	http://nodejs.cn/ 中文官网
检测 node 是否安装成功, 在命令行中输入：
	node --version
	npm -v
安装淘宝镜像
	npm config set registry https://registry.npm.taobao.org
验证淘宝镜像是否安装成功
	npm config get registry
把 npm 替换成 cnpm
	npm install -g cnpm --registry=https://registry.npm.taobao.org
验证 cnpm 是否替换成功
	cnpm -v 
------
`
install.webpack =`
title 安装 webpack 
# 安装 webpack 和 webpack-dev-server 服务器
---code---
npm install webpack webpack-dev-server --save-dev
---code---
`
install.plugins = `
title 安装 webpack 插件
# 引进 HTML 模板插件
---code---
npm install html-webpack-plugin --save-dev
---code---
# 自动清除打包文件夹插件
---code---
npm install clean-webpack-plugin --save-dev
---code---
`
install.babel = `
title 安装 babel 转码器
# Babel是一个广泛使用的转码器
-----
	babel-core 调用Babel的API进行转码
	babel-loader
	babel-preset-es2015 	解析ES6
	babel-preset-react  	解析JSX
	babel-preset-stage-0 解析ES7 提案	
-----
安装命令
---code---
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 --save-dev
---code---
# Babel的配置文件是.babelrc，存放在项目的根目录下
---code---
{
	"presets": [
		"es2015",
		"react",
		"stage-0"
	], 
	"plugins": []
}
---code---
# 在 module 中配置
---code---
{
	test: /.(js|jsx)$/,
	use: 'babel-loader',
	exclude: /node_modules/
}
---code---
`
install.css = `
title 安装 CSS 相关 loader
# css & style loader
---code---
npm install css-loader style-loader --save-dev
---code---
# 在 module 中的配置
---code---
{
	test: /.css$/,
	use:['style-loader', 'css-loader'],
}
---code---
# less & sass loader
---code---
npm install less less-loader --save-dev
npm install sass-loader node-sass --save-dev
---code---
# 在 module 中配置
---code---
{
	test: /.less$/,
	use: ['style-loader', 'css-loader', 'less-loader']
}
{
	test: /.scss$/,
	use: ['style-loader', 'css-loader', 'sass-loader']
}
---code---
`
install.urlLoader = `
title 安装 url-loader 解析图片
# 解析图片 url-loader
---code---
npm install url-loader --save-dev
---code---
# 在 module 中配置
---code---
{
	test: /\.(png|jpg|gif|jpeg)$/,
	use: 'url-loader'
}
---code---
`
install.m