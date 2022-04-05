

const sensenConfig = require('../config/env');

const chokidar = require('chokidar');

const path = require('path');

const $Console = require('./utilities');

const buildComponents = require('./components.build');



function ComponentsStyleWatch(){

    return new Promise((accept, refuse)=>{

        const watcher = chokidar.watch( sensenConfig.path.appActivities ,{ persistent: true });

        watcher

            .on('change', async (filename)=>{

                const rex = new RegExp(`\.(css|s[ac]ss|less)`)

                const macth = filename.match(rex);

                const bsname = path.relative(process.cwd(), filename)

                
                if(macth){

                    $Console.Log('Incoming Components Style', bsname)
                    
                    // await buildComponents(bsname)
                    
                    // .then($=>{

                        exec(

                            `cd "${ process.cwd() }" && node .sensen/bin/build -pipe:activities-style ${ filename }`, 
                            
                            (err, stdout, stderr)=>{

                            if(err){
                
                                refuse(err)
                
                                return;
                                
                            }
                                
                            $Console.Success('Update', bsname)

                            accept(filename)    
                
                        })
        
                    // })

                    // .catch(er=>{

                    //     refuse(er)
                        
                    // })


                }


            })

        ;

        
    })
    
}



module.exports = ComponentsStyleWatch