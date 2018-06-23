const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool: 'eval-source-map',
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css',
			chunkFilename: '[name].chunk.css',
		}),
	],
});
