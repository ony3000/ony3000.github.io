const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
	mode: 'production',
	output: {
		filename: '[name].[chunkhash:7].js',
		chunkFilename: '[name].[chunkhash:7].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash:7].css',
			chunkFilename: '[name].[chunkhash:7].css',
		}),
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	}
});
