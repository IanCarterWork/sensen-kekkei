const path = require("path")



module.exports = {

    /**
     * @type { string }
     */
    mode:'development',



    /**
     * @type { string }
     */
     title:'Sensen Web Application',



    /**
     * @type { string }
     */
    name:"com.sensen.terminal",



    /**
     * @type { string }
     */
    version:"0.0.1",



    /**
     * @type { AvailablePlatforms[] }
     */
    target:['web'],



    /**
     * @type { BuildOptions }
     */
    production:{

        host: 'exemple.com',

        port: 80,

        protocol: 'https'

    },


    /**
     * @type { BuildOptions }
     */
    development:{

        host: 'localhost',

        port: 9196,

        protocol: 'http'

    },


    /**
     * @type { BuildAssets }
     */
    assets:{

        /**
         * @type { BuildIconVariantes }
         */
        icon: {

            default: '',

            light: '',
        
            dark: '',
        
            black: '',
        
            white: '',
            
        },

        /**
         * @type { BuildSplashscreen }
         */
        SplashScreen: {

            message: '',

            color: '',
        
            image: '',
        
            spinner: 'progressbar',
            
        }
        
    },


    /**
     * @type { FrontendPaths }
     */
    paths:{


        app: path.resolve(__dirname, './app'),

            components: path.resolve(__dirname, './app/components'),

            activities: path.resolve(__dirname, './app/activities'),

            theme: path.resolve(__dirname, './app/theme'),

            themePalette: path.resolve(__dirname, './app/theme/palette'),

            themeTone: path.resolve(__dirname, './app/theme/tone'),



        pipe: path.resolve(__dirname, './pipe'),

            pipeComponents: path.resolve(__dirname, './pipe/components'),

            pipeActivities: path.resolve(__dirname, './pipe/activities'),

            pipeTheme: path.resolve(__dirname, './pipe/theme'),

            pipeThemePalette: path.resolve(__dirname, './pipe/theme/palette'),

            pipeThemeTone: path.resolve(__dirname, './pipe/theme/tone'),



        appearance: path.resolve(__dirname, './appearance'),

        buildTemplateFile: path.resolve(__dirname, './.sensen/template/index.html'),
        
        build: path.resolve(__dirname, './build'),

        assets: path.resolve(__dirname, './assets'),

        css: path.resolve(__dirname, './assets/css'),

        js: path.resolve(__dirname, './assets/js'),

        images: path.resolve(__dirname, './assets/images'),

        fonts: path.resolve(__dirname, './assets/fonts'),

        documents: path.resolve(__dirname, './assets/documents'),

        sounds: path.resolve(__dirname, './assets/sounds'),

        videos: path.resolve(__dirname, './assets/videos'),

    },


    /**
     * @type { BuildTools }
     */
    tools:{

        webpack: path.resolve(__dirname, './.sensen/config/webpack.config.js'),

    }


}