
const path = require('path');



module.exports  = {

    title: 'Sensen Jutsu App',

    iD: 'ian.sensen.stylivoir',
    
    target: ['web'],

    /**
     * @type { 'development' | 'production' }
     */
    mode: 'development',

    port: 9163,


    production:{

        host: 'https://exemple.com',

        port: 80,
        
    },

    development:{

        host: 'http://localhost',
        // host: 'http://192.168.1.7',

        port: 9163,
        
    },


    assets: {

        icon: {

            default: ('assets/app-icon.png'),

            light: ('assets/app-light.png'),

            dark: ('assets/app-dark.png'),

            black: ('assets/app-black.png'),

            white: ('assets/app-white.png'),
 
        },

        splashScreen: {

            message: 'Loading...',

            color: '#124a88',

            image: ('assets/splashscreen.png'),
            
        },

    },


    path: {

        build: path.resolve(__dirname, '../../build'),

        public: path.resolve(__dirname, '../../public'),

        assets: path.resolve(__dirname, '../../assets'),

            assetsCSS: path.resolve(__dirname, '../../assets/css'),

            assetsJS: path.resolve(__dirname, '../../assets/js'),

            assetsImages: path.resolve(__dirname, '../../assets/images'),

            assetsFonts: path.resolve(__dirname, '../../assets/fonts'),

            assetsDocuments: path.resolve(__dirname, '../../assets/documents'),

            assetsSounds: path.resolve(__dirname, '../../assets/sounds'),

            assetsVideos: path.resolve(__dirname, '../../assets/videos'),

        app: path.resolve(__dirname, '../../app'),

            appComponents: path.resolve(__dirname, '../../app/components'),

            appActivities: path.resolve(__dirname, '../../app/activities'),

            appTheme: path.resolve(__dirname, '../../app/theme'),

                appThemeKit: path.resolve(__dirname, '../../app/theme/kit'),

                appThemePalette: path.resolve(__dirname, '../../app/theme/palette'),

                appThemeTone: path.resolve(__dirname, '../../app/theme/tone'),

        pipe: path.resolve(__dirname, '../../pipe'),

            pipeApp: path.resolve(__dirname, '../../pipe/app'),

            pipeComponents: path.resolve(__dirname, '../../pipe/app/components'),

            pipeActivities: path.resolve(__dirname, '../../pipe/app/activities'),

            pipePlugins: path.resolve(__dirname, '../../pipe/plugins'),

                pipePluginsScript: path.resolve(__dirname, '../../pipe/plugins/script'),

                // pipePluginsAppearance: path.resolve(__dirname, '../../pipe/plugins/'),

            pipeTheme: path.resolve(__dirname, '../../pipe/app/theme'),

                pipeThemeKit: path.resolve(__dirname, '../../pipe/app/theme/kit'),

                pipeThemePalette: path.resolve(__dirname, '../../pipe/app/theme/palette'),

                pipeThemeTone: path.resolve(__dirname, '../../pipe/app/theme/tone'),

        
        plugins: path.resolve(__dirname, '../../plugins'),

            jsPlugins: path.resolve(__dirname, '../../plugins/script'),

            cssPlugins: path.resolve(__dirname, '../../plugins/appearance'),

            
        template: path.resolve(__dirname, '../template'),

            indexTemplate: path.resolve(__dirname, '../template/index.html'),
        
    },


    tools:{

        rollup:{

            config: path.resolve(__dirname, '../config/rollup.config.js'),
            
        },

        webpack:{

            config: path.resolve(__dirname, '../config/webpack.config.js'),
            
        },
        
    }
    
}