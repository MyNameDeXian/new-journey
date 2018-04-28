const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output:{
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			pages: path.join(__dirname, './src/pages'),
			LearnPages: path.join(__dirname, './src/LearnPages'),
			assets: path.join(__dirname, './src/assets'),
			store: path.join(__dirname, './src/store'),
			components: path.join(__dirname, './src/components')
		},
		extensions: ['.js', '.jsx']
	},
	devtool: 'eval-source-map', 
	// devtool: 'cheap-module-eval-source-map', 
	module: {
		rules:[
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: 'url-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'New Journey',
			template: './index.html'
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		hot: true,
		port: 8000,
		// open: true
	}
}