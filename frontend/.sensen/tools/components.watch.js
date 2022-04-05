

const sensenConfig = require('../config/env');

const chokidar = require('chokidar');

const path = require('path');

const $Console = require('./utilities');

const buildComponents = require('./components.build');



function ComponentsWatch(){

    return new Promise((accept, refuse)=>{

        const watcher = chokidar.watch( sensenConfig.path.appComponents ,{ persistent: true });

        watcher

            .on('change', async (filename)=>{

                const rex = new RegExp(`index\.html`)

                const macth = filename.match(rex);

                const bsname = path.relative(process.cwd(), filename)

                
                if(macth){

                    $Console.Log('Incoming Components', bsname)
                    
                    await buildComponents(bsname)
                    
                    .then($=>{

                        $Console.Success('Update', bsname)

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



module.exports = ComponentsWatch