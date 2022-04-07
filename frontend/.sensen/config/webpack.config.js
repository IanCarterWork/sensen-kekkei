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
const { default: SensenRawCli } = require('sensen.raw.cli');
 
 const mainPath = path.relative(__dirname, '../../')


 /**
  * @type { ProjectFrontendConfig }
  */
 const sensenConfig = require(`${ path.resolve(), "../../sensen.config" }`)
 
 

 

 const defaultCSSLoaders = [

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
 
 


SensenRawCli.$Console.Notice('Build on', 
	(
				
		sensenConfig.mode == 'development' 

		? `${ sensenConfig.development.protocol || 'http' }://${ sensenConfig.development.host }:${ sensenConfig.development.port || sensenConfig.development.port || 9162 }/`

		: `${ sensenConfig.production.protocol || 'http' }://${ sensenConfig.production.host }:${ sensenConfig.production.port || sensenConfig.production.port || 80 }/`
		
	)

)
 
 
 module.exports = {
 
	target: sensenConfig.target || ['web'],

	mode: (sensenConfig.mode == 'development' ) ? 'development' : 'production',
	
	devtool: 'eval-cheap-module-source-map',

	entry: {
		
		app: `${ sensenConfig.paths.pipe }/app/index.js`,
	
	},
 
	output: {
	 
		filename: 'sensen.[name].js',
	 
		path: `${ sensenConfig.paths.build }`,

		publicPath: (
			
			sensenConfig.mode == 'development' 

			? `${ sensenConfig.development.protocol || 'http' }://${ sensenConfig.development.host }:${ sensenConfig.development.port || sensenConfig.development.port || 9162 }/`

			: `${ sensenConfig.production.protocol || 'http' }://${ sensenConfig.production.host }:${ sensenConfig.production.port || sensenConfig.production.port || 80 }/`
			
		),
	 
		clean: false,
	 
	},
	 
	 module:{
 
		 rules:[
 

			{
				
				test: /\.(css)$/i,
				
				use: defaultCSSLoaders,
				
			},



			{
				test: /\.(html|activity|component|sense|htm)$/i,
				exclude: path.resolve(__dirname, '../template/index.html'),
				use: [
					{
						loader: 'html-loader',
						options:{
							sources: false,
							// preprocessor: (content, loaderContext) => {

							// 	console.log('PREPROCESSOR', content, HTMLParser.parseFromString(content) )
								
							// 	return content
								
							// }
						}
					}
				]
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
							context: path.resolve(process.cwd(), sensenConfig.paths.build, './assets/'),
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

			

		]
		 
	 },
 
	 resolve: {
 
		extensions: ["", ".js"],
 
		alias:{

			'@Components' : `${ sensenConfig.paths.pipeComponents }`,

			'@Activities' : `${ sensenConfig.paths.pipeActivities }`,

			'@Palette' : `${ sensenConfig.paths.pipeThemePalette }`,

			'@Tone' : `${ sensenConfig.paths.pipeThemeTone }`,

			'@Themes' : `${ sensenConfig.paths.pipeTheme }`,

			// '@Plugins' : `${ sensenConfig.paths.plugins }`,
			
			// '@PluginsScript' : `${ sensenConfig.paths.pipePluginsScript }`,

			'@AssetsCSS' : `${ sensenConfig.paths.css }`,
			
			'@AssetsJS' : `${ sensenConfig.paths.assetsJS }`,

			'@AssetsFonts' : `${ sensenConfig.paths.assetsFonts }`,

			'@AssetsImages' : `${ sensenConfig.paths.assetsImages }`,

			'@Assets' : `${ sensenConfig.paths.assets }`,

			'@App' : `${ sensenConfig.paths.pipeApp }`,

			'@Main' : `${ path.resolve(__dirname, '../../') }`,
				
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
	
		port: sensenConfig.mode == 'development' 
			
			? sensenConfig.development.port

			: sensenConfig.production.port
			
		,

		historyApiFallback: true,


		

		allowedHosts : 'all',

		static: sensenConfig.paths.build
	 
	 },
 
	 plugins: [

		new CleanWebpackPlugin({

			root: `${ sensenConfig.paths.build }`,
			
			verbose: true,
			
			dry: false,
			
			cleanOnceBeforeBuildPatterns: [
			
				'sensen.bundle.*.js',
			
			],

		}),




		new CopyPlugin({
		
			patterns:[
			
				/**
				 * Assets : Fonts
				 */
				{ 
					from: `${ sensenConfig.paths.fonts }`, 
					
					to: `${ sensenConfig.paths.build }/assets/fonts`,
					
					force: true,
	
				},
			
				/**
				 * Assets : Images
				 */
				{ 
					from: `${ sensenConfig.paths.images }`, 
					
					to: `${ sensenConfig.paths.build }/assets/images`,
					
					force: true,
	
				},
			
				/**
				 * Assets : CSS
				 */
				{ 
					from: `${ sensenConfig.paths.css }`, 
					
					to: `${ sensenConfig.paths.build }/assets/css`,
					
					// force: true,
	
				},
			
				/**
				 * Assets : JS
				 */
				{ 
					from: `${ sensenConfig.paths.js }`, 
					
					to: `${ sensenConfig.paths.build }/assets/js`,
					
					// force: true,
	
				},
			
				/**
				 * Assets : Sounds
				 */
				{ 
					from: `${ sensenConfig.paths.sounds }`, 
					
					to: `${ sensenConfig.paths.build }/assets/sounds`,
					
					force: true,
	
				},
			
				/**
				 * Assets : Videos
				 */
				{ 
					from: `${ sensenConfig.paths.videos }`, 
					
					to: `${ sensenConfig.paths.build }/assets/videos`,
					
					force: true,
	
				},
			
				/**
				 * Assets : Documents
				 */
				{ 
					from: `${ sensenConfig.paths.documents }`, 
					
					to: `${ sensenConfig.paths.build }/assets/documents`,
					
					force: true,
	
				},

				// { from: sensenConfig.paths.assets, to: sensenConfig.paths.build + '/assets', },
		
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

			iD: `${ sensenConfig.name || 'com.sensen.demo' }`,
		
			template: `${ sensenConfig.paths.buildTemplateFile }`,
		
			viewport: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi, viewport-fit=cover',
		
			themeColor: '#4285f4',

			port: sensenConfig.mode == 'development' 
				
				? sensenConfig.development.port

				: sensenConfig.production.port

			,

			appURL: sensenConfig.mode == 'development' 

				? `${ sensenConfig.development.protocol }://${ sensenConfig.development.host }:${ sensenConfig.development.port || sensenConfig.development.port || 9162 }/`

				: `${ sensenConfig.production.protocol }://${ sensenConfig.production.host }:${ sensenConfig.production.port || sensenConfig.production.port || 80 }/`
				
			,

		
			inject: true,

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
 