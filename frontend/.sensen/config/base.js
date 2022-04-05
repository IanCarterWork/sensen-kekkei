
const commonjs = require('@rollup/plugin-commonjs')

const babel = require('rollup-plugin-babel')

const json = require('@rollup/plugin-json')

const nodeResolve = require('rollup-plugin-node-resolve')

const cleanup = require('rollup-plugin-cleanup')

const ignore = require('rollup-plugin-ignore')




module.exports = [

    ignore(["fs", "path"]),

    cleanup({ comments: "istanbul", extensions: ["js"] }),

    babel(),

    commonjs(),

    json(),

    nodeResolve({

        jsnext: true,        

        main: true

    }),

]