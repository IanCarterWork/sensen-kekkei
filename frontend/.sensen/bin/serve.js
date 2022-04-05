const { exec } = require("child_process");

const sensenConfig = require('../config/env');

const $Console = require('../tools/utilities');

const path = require('path');

const ConsoleChunk = require("../tools/console.parse");

const SensenFactory = require("../tools/factory");




/**
 * Server
 */

const TaskServe = ()=>{

    exec(`tsc -watch`).on('spawn', ()=>{

        $Console.Message('TypeScript', '-Watch is Ready')
        
    }).on('message', (e)=>{

        $Console.Message('TypeScript', e)
                
    })
    

    const serve = exec(`tsc && npx webpack serve --hot --config ${ sensenConfig.tools.webpack.config }`);

    serve.on('spawn', ()=>{

        $Console.Message('Sensen Serve', 'Spawn...')
        
    })

    serve.on('error', (e)=>{

        $Console.Error('Sensen Serve Error', e)
        
    })


    serve.stdout.addListener('error', (chunk) => {

        $Console.Error('Sensen Serve Error', chunk)
        
    })

    serve.stdout.addListener('data', (chunk) => {

        $Console.Notice('Updating', 'Sensen Serve...')

        ConsoleChunk(chunk)
        
    })

    $Console.Message('Sensen Serve', `Run Webpack with ${ path.relative(process.cwd(), sensenConfig.tools.webpack.config) }`,  )
        
    
}



const TaskPluginWatcher = ()=>{

    const watchSCSS = exec(
     
        `sass --watch ${ sensenConfig.path.cssPlugins }:${ sensenConfig.path.public }/sensen/plugins/css`, 
     
    )
    
    watchSCSS.on('spawn',()=>{
    
        $Console.Message('Plugin CSS Watch', 'done')
        
    })
    
    watchSCSS.stdout.addListener('data', (chunk) => {
    
        $Console.Notice('Update Plugin CSS', '...' )
        
        ConsoleChunk(chunk)
    
    })
    
    
}




/**
 * Factory
 */

SensenFactory.Main()

    .then(({factory, promises})=>{

        $Console.Notice('Factory', 'Ready!' )    
        
        factory.ActiveWatcher()

        TaskPluginWatcher();
        
        TaskServe();
        
    })

    .catch(er=>{

        $Console.Error('Factory', 'Failed!', er)
        
    })
        
$Console.Message('Factory', 'Starting...' )    
   

