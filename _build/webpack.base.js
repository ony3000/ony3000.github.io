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
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.sass$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							indentedSyntax: true
						}
					}
				]
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 2048,
							name: 'media/[name].[hash:7].[ext]'
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 2048,
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
							name: 'font/[name].[hash:7].[ext]'
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
			cacheGroups: {
				commons: {
					name: 'commons',
					chunks: 'initial',
					minChunks: 2
				}
			}
		}
	}
};
