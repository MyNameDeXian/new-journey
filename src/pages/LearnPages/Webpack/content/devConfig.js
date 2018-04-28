export const dev = {}

dev.config = `
title webpack 生产环境配置
# webpack 生产环境配置，示例：
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
	// 选择一种 source map 格式来增强调试过程。
	// 不同的值会明显影响到构建(build)和重新构建(rebuild)的速度
	devtool: 'eval-source-map',
	// 解析模块配置
	resolve: {
		// 创建 import 或 require 的别名，来确保模块引入变得更简单
		alias: {
			components: path.resolve(__dirname, './src/components'),
			pages: path.resolve(__dirname, './src/pages'),
		},
		// 自动解析文件扩展名
		extensions: ['.js', '.jsx']
	},
	// webpack通过loaders支持很多种的语言，loader会将非js module添加到依赖bundle中。。
	module: {
		rules: [
			{  // babel解析jsx
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{  // 解析css
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			},
			{  // css样式编辑语言scss
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			},
			{  // 解析图片
				test: /\.(png|jpg|gif|jpeg)$/,
				use: 'url-loader'
			}
		]
	},
	// 插件
	plugin: [
		// HTML 模板
		new HtmlWebpackPlugin({
			title: 'New Journey',
			template: './index.html'
		}),
		// 清除dist 文件包
		new CleanWebpackPlugin(),
		// 热更新，就是调试修改时自动更新
		new webpack.HotModuleReplacementPlugin(),
	],
	// 服务器配置
	devServer: {
		// 出口(output) 的 path 路径
		contentBase: path.resolve(__dirname, './dist'),
		hot: true,  // 是否开启热更新，默认false
		port: 8000, // 服务端口 
		open: true, // 开启服务后自动打开网页，默认 false
	}
}
---code---
`