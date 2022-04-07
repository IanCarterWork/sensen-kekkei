"use strict";
/**
 * @type { ProjectFrontendConfig }
 */
module.exports = {
    /**
     * @type { string }
     */
    mode: 'development',
    /**
     * @type { string }
     */
    title: 'Sensen Kekkei',
    /**
     * @type { string }
     */
    name: "com.sensen.katon",
    /**
     * @type { string }
     */
    version: "0.0.1",
    /**
     * @type { AvailablePlatforms[] }
     */
    target: ['web'],
    /**
     * @type { BuildOptions }
     */
    production: {
        host: 'exemple.com',
        port: 80,
        protocol: 'https'
    },
    /**
     * @type { BuildOptions }
     */
    development: {
        host: 'localhost',
        port: 9196,
        protocol: 'http'
    },
    /**
     * @type { BuildAssets }
     */
    assets: {
        /**
         * @type { BuildIconVariantes }
         */
        icon: {
            default: 'assets/images/icon/app-icon-original.png',
            light: 'assets/images/icon/app-icon-light.png',
            dark: 'assets/images/icon/app-icon-dark.png',
            black: 'assets/images/icon/app-icon-black.png',
            white: 'assets/images/icon/app-icon-white.png',
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
};
