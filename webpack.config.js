const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATH_SOURCE = path.join(__dirname, './src')
const PATH_DIST = path.join(__dirname, './dist')
const PATH_PUBLIC = path.join(__dirname, './public')

module.exports = () => ({
	entry: [path.join(PATH_SOURCE, './app.js')],
	output: {
		path: PATH_DIST,
		filename: 'js/bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.html$/,
				use: 'html-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(PATH_PUBLIC, './index.html'),
		}),
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
	],
	resolve: {
		alias: {
			Components: path.join(PATH_SOURCE, './components/'),
		},
	},
	devServer: {
		host: 'localhost',
		port: '8000',
		open: true,
		overlay: {
			errors: true,
			warnings: true,
		},
	},
})
