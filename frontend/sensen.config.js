import path from "path";


/**
 * @type { string }
 */
export const mode = 'development';



/**
 * @type { string }
 */
export const name = "com.sensen.terminal";



/**
 * @type { string }
 */
export const version = "0.0.1";



/**
 * @type { AvailablePlatforms[] }
 */
export const target = ['browser'];



/**
 * @type { BuildOptions }
 */
export const production = {
    host: 'exemple.com',
    port: 80,
    protocol: 'https'
};


/**
 * @type { BuildOptions }
 */
export const development = {
    host: 'localhost',
    port: 9196,
    protocol: 'http'
};


/**
 * @type { BuildAssets }
 */
export const assets = {

    icon: {

    },

    SplashScreen: {

    }
    
} 


/**
 * @type { FrontendPaths }
 */
export const paths = {

    app: path.resolve(__dirname, './app'),

    components: path.resolve(__dirname, './app/components'),

    activities: path.resolve(__dirname, './app/activities'),

    theme: path.resolve(__dirname, './app/theme'),

    themePalette: path.resolve(__dirname, './app/theme/palette'),

    themeTone: path.resolve(__dirname, './app/theme/tone'),

    pipe: path.resolve(__dirname, './pipe'),

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

}


/**
 * @type { BuildTools }
 */
export const tools = {

}