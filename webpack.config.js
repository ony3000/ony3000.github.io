const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './_src/index.js',
		print: './_src/print.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					// process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(csv|tsv)$/,
				use: [
					'csv-loader'
				]
			},
			{
				test: /\.xml$/,
				use: [
					'xml-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Custom Template',
			template: '_src/assets/index.html'

			// can include or exclude certain chunks by set options below
			// chunks: ['app']
			// excludeChunks: ['dev-helper']
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		})
	]
};
