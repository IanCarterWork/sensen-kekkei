const { exec } = require("child_process");

const fs = require("fs");

const path = require("path");

const { cwd } = require("process");

const glob = require('glob-fs')({ gitignore: true });

const { default: SensenRawCli } = require("sensen.raw.cli");

const sensenConfig = require("../config/env");

const $Console = require("../tools/utilities");





const plugin = new SensenRawCli.Create({

    iD: `plugin`,

    Title: `Sensen Plugins`,

    About: `Plugin your resource`
    
});



plugin




    /**
     * Plugin tools
     */
    .Add(

        new SensenRawCli.Child({

            iD: `-deploy`,

            Title: `Sensen Tools Plugin`,

            About: `Plugin tools`,

            Children:[


                /**
                 * Plugin CSS Tools
                 */

                new SensenRawCli.Child({

                    iD: `css`,

                    Title: `Sensen CSS Plugin`,

                    About: ``,

                    Execute: (args) => {

                        const dir = path.relative(process.cwd(), sensenConfig.path.cssPlugins);
        
                        const files = (args.length) ? args : glob.readdirSync( `${dir}/**/*.css` );
        
                        const to = `${ sensenConfig.path.public }/sensen/plugins/css`
        
                        
                        if(!fs.existsSync(to)){ fs.mkdir(to, { recursive: true}, ()=>{ }) }
        
                        if(Array.isArray(files)){
        
                            files.forEach(file=>{

                                const _file = `${ path.dirname(path.dirname(to)) }/${ file }`

                                const dirn = `${ path.dirname(_file) }`

                                if(!fs.existsSync(dirn)){ 
                                    
                                    fs.mkdir(dirn, { recursive: true}, ()=>{ }) 
                                
                                }

                                fs.copyFile(`${ process.cwd() }/${ file }`, _file, ()=>{
        
                                    $Console.Success('Plugin Deployed', file)
                                    
                                })
                                
                            })
                            
                        }
        
                            
        
                    },

                }),

                
                
            ]

        })
        
    )






    /** * Démarrage */
    .Run( SensenRawCli.Create.Args(process.argv, 2) )

;



