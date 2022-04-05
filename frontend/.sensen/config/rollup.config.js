const SensenConfig = require('./env')

const development = require('./dev')

const production = require('./prod')

const exchangeDir = (SensenConfig.mode == 'development') ? `${ SensenConfig.path.public }` : `${ SensenConfig.path.build }`

const configSheet = SensenConfig.mode == 'production' ? production : development






module.exports = {

	input: './pipe/index.js',

	output: {

		file: `${ exchangeDir }/sensen.bundle.js`,

		format: 'es'

	},

	...configSheet

};
