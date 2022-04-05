/**
 * Système Utilities
 */
 const path = require('path');

 const HtmlWebpackPlugin = require('html-webpack-plugin');
 
 const CopyPlugin = require("copy-webpack-plugin");
 
 const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
 
 const WebpackShellPluginNext = require('webpack-shell-plugin-next');
 
 const WatchExternalFilesPlugin = require('webpack-watch-files-plugin');

 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
 const sensenConfig = require('./env');
 
 
 

 const defaultCSSLoaders = [
	
	// "style-loader", 

	{
		loader: "css-loader",
		options:{
			url: false,
			import: false,
			importLoaders: 2,
			sourceMap: false,
		}
	},


]
 
 
 
 
 module.exports = {
 
	target: sensenConfig.target || ['web'],

	mode: (sensenConfig.mode == 'development' ) ? 'development' : 'production',
	
	devtool: 'eval-cheap-module-source-map',

	entry: {
		
		app: `${ sensenConfig.path.pipe }/app/index.js`,
	
	},
 
	output: {
	 
		filename: 'assets/js/sensen.bundle.[name].[chunkhash:32].js',
	 
		path: `${ sensenConfig.path.public }`,
	 
		clean: false,
	 
	},
	 
	 module:{
 
		 rules:[
 

			{
				
				test: /\.(css)$/i,
				
				use: defaultCSSLoaders,
				
			},
			
			{
				
				test: /\.(s[ac]ss)$/i,
				
				use: [ 

					...defaultCSSLoaders,
					
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					},

				],
				
			},


			{

				test: /\.js$/,
				
				exclude: /(node_modules)/,
				
				use: { loader: 'babel-loader', }	

			},


			

			{

				test: /\.(png|jpe?g|gif|svg|webp)$/i, // \.(woff2|eot|ttf|wav|mp3|ogg)(\?.*)?$

				use: [


					{
						loader: `url-loader`,
						options:{
							limit: 8192,
							context: path.resolve(process.cwd(), sensenConfig.path.public, './assets/'),
							name:'[path]/[name].[ext]'
						}
					},

					{
						loader: 'img-loader',
						options:{
							enabled: !(sensenConfig.mode == 'development'),
						}
					}
					
				],

			},


			{

				test: /\.(woff2|eot|ttf)(\?.*)$/i,

				loader: 'file-loader',

				options:{
					context: path.resolve(process.cwd(), sensenConfig.path.public, './assets/'),
					name:'[path]/[name].[ext]',
				}

			},

			

		]
		 
	 },
 
	 resolve: {
 
		extensions: ["", ".js"],
 
		alias:{

			'@Components' : `${ sensenConfig.path.pipeComponents }`,

			'@Activities' : `${ sensenConfig.path.pipeActivities }`,

			'@Palette' : `${ sensenConfig.path.pipeThemePalette }`,

			'@Tone' : `${ sensenConfig.path.pipeThemeTone }`,

			'@Themes' : `${ sensenConfig.path.pipeTheme }`,

			'@Plugins' : `${ sensenConfig.path.plugins }`,
			
			'@PluginsScript' : `${ sensenConfig.path.pipePluginsScript }`,

			'@AssetsCSS' : `${ sensenConfig.path.assetsCSS }`,
			
			'@AssetsJS' : `${ sensenConfig.path.assetsJS }`,

			'@AssetsFonts' : `${ sensenConfig.path.assetsFonts }`,

			'@AssetsImages' : `${ sensenConfig.path.assetsImages }`,

			'@Assets' : `${ sensenConfig.path.assets }`,

			'@App' : `${ sensenConfig.path.pipeApp }`,
				
		},

		fallback: {

			"fs": false,

			"path": false,

		},
 
	 },
 
	 devServer: {
 
		 open: true,
	 
		 hot: true,
	 
		 compress: true,
	 
		 port: sensenConfig.port || 9162,
	 
	 },
 
	 plugins: [

		new CleanWebpackPlugin({

			root: `${ sensenConfig.path.public }/assets/js/`,
			verbose: true,
			dry: false,
			cleanOnceBeforeBuildPatterns: [
				'assets/js/sensen.bundle.*.js',
			],
		}),




		new CopyPlugin({
		
			patterns:[
			
				/**
				 * Assets : Fonts
				 */
				{ 
					from: `${ sensenConfig.path.assetsFonts }`, 
					
					to: `${ sensenConfig.path.public }/assets/fonts`,
					
					force: true,
	
				},
			
				/**
				 * Assets : Images
				 */
				{ 
					from: `${ sensenConfig.path.assetsImages }`, 
					
					to: `${ sensenConfig.path.public }/assets/images`,
					
					force: true,
	
				},
			
				/**
				 * Assets : CSS
				 */
				{ 
					from: `${ sensenConfig.path.assetsCSS }`, 
					
					to: `${ sensenConfig.path.public }/assets/css`,
					
					// force: true,
	
				},
			
				/**
				 * Assets : JS
				 */
				{ 
					from: `${ sensenConfig.path.assetsJS }`, 
					
					to: `${ sensenConfig.path.public }/assets/js`,
					
					// force: true,
	
				},
			
				/**
				 * Assets : Sounds
				 */
				{ 
					from: `${ sensenConfig.path.assetsSounds }`, 
					
					to: `${ sensenConfig.path.public }/assets/sounds`,
					
					force: true,
	
				},
			
				/**
				 * Assets : Videos
				 */
				{ 
					from: `${ sensenConfig.path.assetsVideos }`, 
					
					to: `${ sensenConfig.path.public }/assets/videos`,
					
					force: true,
	
				},
			
				/**
				 * Assets : Documents
				 */
				{ 
					from: `${ sensenConfig.path.assetsDocuments }`, 
					
					to: `${ sensenConfig.path.public }/assets/documents`,
					
					force: true,
	
				},

				// { from: sensenConfig.path.assets, to: sensenConfig.path.public + '/assets', },
		
			],
		
		}),
 
 
		 // new FaviconsWebpackPlugin({
		 
		 // 	logo: './assets/images/ggn.senju.png',
		 
		 // 	cache: true,
		 
		 // 	inject:true,
		 
		 // 	icons: {
		 
		 // 		android: true, 
		 
		 // 		appleIcon: true, 
		 
		 // 		appleStartup: true, 
		 
		 // 		coast: true, 
		 
		 // 		favicons: true, 
		 
		 // 		windows: true, 
		 
		 // 		yandex: true, 
		 
		 // 	},
		 
		 // }),
 
 
		 new HtmlWebpackPlugin({  
		 
			filename: 'index.html',
		
			title: `${ sensenConfig.title || 'Sensen Jutsu Demo' }`,

			iD: `${ sensenConfig.iD || 'com.sensen.demo' }`,
		
			template: `${ sensenConfig.path.indexTemplate }`,
		
			viewport: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi, viewport-fit=cover',
		
			themeColor: '#4285f4',

			port: sensenConfig.port || 9162,

			appURL: sensenConfig.mode == 'development' 

				? `${ sensenConfig.development.host }:${ sensenConfig.development.port || sensenConfig.port || 9162 }/`

				: `${ sensenConfig.production.host }:${ sensenConfig.production.port || sensenConfig.port || 80 }/`
				

				,
		
			// inject: 'body',

			links:[]
		 
		 }),
 
	 ],
 
	 optimization: {
		 
		runtimeChunk: 'multiple',
		 
	 },
 
	 performance: {
 
		 hints: false,
		 
		 maxEntrypointSize: 512000,
		 
		 maxAssetSize: 512000
 
	 },
 
	 
 };
 