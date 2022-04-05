const { exec } = require("child_process");

const sensenConfig = require('../config/env');

const $Console = require('../tools/utilities');

const path = require('path');

const ConsoleChunk = require("../tools/console.parse");

const SensenFactory = require("../tools/factory");




/**
 * Server
 */

const TaskBuild = ()=>{


    const serve = exec(`tsc && webpack --config ${ sensenConfig.tools.webpack.config }`);

    serve.on('spawn', ()=>{

        $Console.Message('Sensen Build', 'Spawn...')
        
    })

    serve.on('error', (e)=>{

        $Console.Error('Sensen Build Error', e)
        
    })


    serve.stdout.addListener('error', (chunk) => {

        $Console.Error('Sensen Build Error', chunk)
        
    })

    serve.stdout.addListener('data', (chunk) => {

        $Console.Notice('Updating', 'Sensen Build...')

        ConsoleChunk(chunk)
        
    })

    $Console.Message('Sensen Build', `Run Webpack with ${ path.relative(process.cwd(), sensenConfig.tools.webpack.config) }`,  )
        
    
}





/**
 * Factory
 */

SensenFactory.Main()

    .then(({factory, promises})=>{

        $Console.Notice('Factory', 'Build complet!' )
        
        TaskBuild();
        
    })

    .catch(er=>{

        $Console.Error('Factory', 'Build Failed!', er)
        
    })
        
$Console.Message('Factory', 'Ready to build...' )    
   

