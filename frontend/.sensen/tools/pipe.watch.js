

const sensenConfig = require('../config/env');

const chokidar = require('chokidar');

const path = require('path');

const $Console = require('./utilities');

const buildPipe = require('./pipe.build');



function PipeWatch(){

    return new Promise((accept, refuse)=>{

        const watcher = chokidar.watch( sensenConfig.path.pipe ,{ persistent: true });

        watcher

            .on('change', async (filename)=>{

                const rex = new RegExp(`\.js`)

                const macth = filename.match(rex);

                const bsname = path.relative(process.cwd(), filename)

                
                if(macth){

                    $Console.Log('Incoming Pipe', bsname)
                    
                    await buildPipe()
                    
                    .then($=>{

                        $Console.Success('Update Pipe', bsname)

                        accept(filename)

                    })

                    .catch(er=>{

                        refuse(er)
                        
                    })


                }


            })

        ;

        
    })
    
}



module.exports = PipeWatch