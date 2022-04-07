"use strict";
const path = require("path");
const info = require("./sensen.info");
/**
 * @type { ProjectFrontendConfig }
 */
module.exports = {
    ...info,
    /**
     * @type { FrontendPaths }
     */
    paths: {
        app: path.resolve(__dirname, './app'),
        components: path.resolve(__dirname, './app/components'),
        activities: path.resolve(__dirname, './app/activities'),
        theme: path.resolve(__dirname, './app/theme'),
        themePalette: path.resolve(__dirname, './app/theme/palette'),
        themeTone: path.resolve(__dirname, './app/theme/tone'),
        pipe: path.resolve(__dirname, './pipe'),
        pipeApp: path.resolve(__dirname, './pipe/app/'),
        pipeComponents: path.resolve(__dirname, './pipe/app/components'),
        pipeActivities: path.resolve(__dirname, './pipe/app/activities'),
        pipeTheme: path.resolve(__dirname, './pipe/app/theme'),
        pipeThemePalette: path.resolve(__dirname, './pipe/app/theme/palette'),
        pipeThemeTone: path.resolve(__dirname, './pipe/app/theme/tone'),
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
    tools: {
        webpack: path.resolve(__dirname, './.sensen/config/webpack.config.js'),
    }
};
