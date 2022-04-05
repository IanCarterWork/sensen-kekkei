
const SensenConfig = require('./env')

const path = require('path')

const fs = require('fs')

const { render } = require('ejs')

// const server = require('rollup-plugin-server')

const configSheet = require('./base')


module.exports = {

    plugins: [

		...configSheet,

	]

}