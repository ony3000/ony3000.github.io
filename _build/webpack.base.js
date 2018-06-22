const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
	entry: {
		app: './_src/index.js',
	},
	output: {
		filename: '[name].[chunkhash:7].js',
		chunkFilename: '[name].[chunkhash:7].js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
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
							limit: 8192,
							name: 'image/[name].[hash:7].[ext]'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 8192,
							name: 'font/[name].[hash:7].[ext]'
						}
					}
				]
			},
			{
				test: /\.(csv|tsv)$/,
				use: [
					{
						loader: 'csv-loader',
						options: {
							limit: 8192,
							name: 'data/[name].[hash:7].[ext]'
						}
					}
				]
			},
			{
				test: /\.xml$/,
				use: [
					{
						loader: 'xml-loader',
						options: {
							limit: 8192,
							name: 'data/[name].[hash:7].[ext]'
						}
					}
				]
			},
			{
				test: /\.vue$/,
				use: [
					'vue-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.json', '.vue']
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '..')
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash:7].css',
			chunkFilename: '[name].[chunkhash:7].css',
		}),
		new HtmlWebpackPlugin({
			title: 'Custom Template',
			template: '_src/assets/index.html'

			// can include or exclude certain chunks by set options below
			// chunks: ['app']
			// excludeChunks: ['dev-helper']
		}),
		new VueLoaderPlugin(),
		new ManifestPlugin()
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
};
