const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output:{
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			title: 'New Journey',
			template: './index.html'
		}),
	]
}