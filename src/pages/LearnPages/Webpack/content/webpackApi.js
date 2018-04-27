export const webpackApi = {}

webpackApi.config = `
title webpack 简单示例
# webpack 简单示例
---code---
const path = require("path"); 
const webpack = require("webpack");
cosnt HtmlWebpackPlugin = require("html-webpack-plugin");
cosnt CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
	// 入口文件
	entry: path.resolve(__dirname, './src/index.js'),
	// 出口文件
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	// 配置模块如何解析
	resolve: {
		// 创建 import 或 require 的别名，来确保模块引入变得更简单
		alias: {
			components: path.resolve(__dirname, './src/components'),
			pages: path.resolve(__dirname, './src/pages'),
		},
		// 自动解析文件扩展名
		extensions: ['.js', '.jsx']
	},
}
---code---
`
webpackApi.path = `
title path 路径处理
--------
	path 为 nodeJs 的内置路径处理模块，path.join 与 path.resolve 对比讲解：
--------
# 路径拼接 path.join( [path1], [path2], ... )
-------
	path.join 方法可以连接任意多个路径字符串。要连接的多个路径可做为参数传入。
	path.join 方法在接边路径的同时也会对路径进行规范化。例如：
------- 
---code---
const path = require('path'); 
//合法的字符串连接 
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..') 
// 连接后 
'/foo/bar/baz/asdf' 

//不合法的字符串将抛出异常 
path.join('foo', {}, 'bar') 
// 抛出的异常 TypeError: Arguments to path.join must be strings
---code---
# 路径解析：path.resolve( [from ...], to )
------------
	path.resolve 方法可以将多个路径解析为一个规范化的绝对路径。
	其处理方式类似于对这些路径逐一进行cd操作，与cd操作不同的是，路径可以是文件。
	并且 resolve 方法不会利用底层的文件系统判断路径是否存在，而只是进行路径字符串操作
------------
---code---
path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')
---code---
-----
相当于
-----
---code---
cd foo/bar
cd /tmp/file/
cd ..
cd a/../subfile
---code---
-----
示例：
-----
---code---
path.resolve('/foo/bar', './baz') 
// 输出结果为 
'/foo/bar/baz' 
path.resolve('/foo/bar', '/tmp/file/') 
// 输出结果为 
'/tmp/file' 

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif') 
// 当前的工作路径是 /home/itbilu/node，则输出结果为 
'/home/itbilu/node/wwwroot/static_files/gif/image.gif'
---code---
# 对比
---code---
const path = require('path'); 
let myPath = path.join(__dirname,'/img/so'); 
let myPath2 = path.join(__dirname,'./img/so'); 
let myPath3 = path.resolve(__dirname,'/img/so'); 
let myPath4 = path.resolve(__dirname,'./img/so'); 
console.log(__dirname); // D:/myProgram/test 
console.log(myPath);    // D:/myProgram/test/img/so 
console.log(myPath2);   // D:/myProgram/test/img/so 
console.log(myPath3);   // D:/img/so
console.log(myPath4);   // D:/myProgram/test/img/so
---code---
`
webpackApi.entry = `
title 入口(entry)
# webpack 单入口 和 多入口几种写法
---code---
const path = require('path');
module.exports = {
	entry: path.resolve(__dirname, './src/main.js'),
}
---code---
`
webpackApi.output = `
title 出口(output)
# webpack 出口 output 配置方法
---code---
	output: {
		filename: '[name.js]'   
		path: path.resolve(__dirname, 'dist')
	}
---code---
# 配置出口(output)文件 和 入口(entry)文件同名
---code---
	output: {
		filename: '[name.js]'   
		path: path.resolve(__dirname, 'dist')
	}
---code---
-----
	[name] 根据入口文件名称，打包成相同的名称，有几个入口文件，就打包出几个文件。
-----
`