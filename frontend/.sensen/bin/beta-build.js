const { exec } = require("child_process");

const fs = require("fs");

const path = require("path");

const { cwd } = require("process");

const glob = require('glob-fs')({ gitignore: true });

const { default: SensenRawCli } = require("sensen.raw.cli");

const sensenConfig = require("../config/env");

const $Console = require("../tools/utilities");





const builder = new SensenRawCli.Create({

    iD: `build`,

    Title: `Sensen Builder`,

    About: `Build your resource`
    
});



builder



    /**
     * Build Pipe
     */
    .Add(

        new SensenRawCli.Child({

            iD: `-pipe`,

            Title: `Sensen Pipe Builder`,

            About: `Build pipe scripts resource`,

            Execute: (args) => `rollup --config ${ sensenConfig.tools.rollup.config }`,
            
        })
        
    )




    /**
     * Build Scene Components
     */
    .Add(

        new SensenRawCli.Child({

            iD: `-components`,

            Title: `Sensen Components Builder`,

            About: `Build components`,

            Execute: (args) => {

                const dir = path.relative(process.cwd(), sensenConfig.path.appComponents);

                const files = (args.length) ? args : glob.readdirSync( `${dir}/**/index.html` );

                const to = `${ sensenConfig.path.public }/sensen/components`


                
                
                if(!fs.existsSync(to)){
                    
                    fs.mkdir(to, { recursive: true}, ()=>{

                    })
                    
                }

                if(Array.isArray(files)){


                    const _dir = path.resolve(__dirname, `../../../`)
                    
                    
                    files.forEach(file=>{

                        // const _dir = path.relative(__dirname, file||'')

                        const _file = `${ _dir }/${ file }`

                        const name = path.basename( path.dirname(file) )


                        $Console.Notice('Copy', _file, '=>', `${ to }/${ name }.html` )
                        

                        fs.copyFile(`${ _file }`, `${ to }/${ name }.html`, ()=>{

                            $Console.Success('Mount Component', name)
                            
                        })
                        
                    })
                    
                }

                    

            },
            
        })
        
    )




    /**
     * Build Scene Activity Style
     */
    .Add(

        new SensenRawCli.Child({

            iD: `-pipe:activities-style`,

            Title: `Sensen Pipe`,

            About: `Add components style to pipe`,

            Execute: (args) => {

                const dir = path.relative(process.cwd(), sensenConfig.path.appActivities);

                const files = (args.length) ? args : glob.readdirSync( `${dir}/**/index.(css|s[ac]ss|less)` );

                const to = `${ sensenConfig.path.pipe }/activities`


                
                
                // if(!fs.existsSync(to)){
                    
                    //     fs.mkdir(to, { recursive: true}, ()=>{
                        
                        //     })
                        
                        // }
                        
                        if(Array.isArray(files)){
                            
                            
                            // const _dir = path.resolve(__dirname, `../../`)
                            
                            
                        files.forEach(file=>{
                            
                            const _abs = path.resolve(process.cwd(), '../', file||'')

                            const _pathname = path.relative(sensenConfig.path.appActivities, _abs)

                            const _out = `${ to }/${ _pathname }`
                            
                            // const _file = `${ _abs }/${ file }`
                            
                            // const name = path.relative()
                            
                            $Console.Notice('Copy :','\n File :', file,'\n ABSOLUTE :', _abs, '\n OUT :', _out); 

                        // $Console.Notice('Copy', _file, '=>', `${ to }/${ name }` )


                        fs.copyFile(`${ _abs }`, `${ _out }`, ()=>{

                            $Console.Success('Mount Activity', _pathname)
                            
                        })
                        
                    })
                    
                }

                    

            },
            
        })
        
    )




    // /**
    //  * Build Scene Activity Style
    //  */
    // .Add(

    //     new SensenRawCli.Child({

    //         iD: `-pipe:components-style`,

    //         Title: `Sensen Pipe`,

    //         About: `Add components style to pipe`,

    //         Execute: (args) => {

    //             const dir = path.relative(process.cwd(), sensenConfig.path.appComponents);

    //             const files = (args.length) ? args : glob.readdirSync( `${dir}/**/index.(css|s[ac]ss|less)` );

    //             const to = `${ sensenConfig.path.pipe }/components`


                
                
    //             if(!fs.existsSync(to)){
                    
    //                 fs.mkdir(to, { recursive: true}, ()=>{

    //                 })
                    
    //             }

    //             if(Array.isArray(files)){


    //                 const _dir = path.resolve(__dirname, `../../`)
                    
                    
    //                 files.forEach(file=>{

    //                     // const _dir = path.relative(__dirname, file||'')

    //                     const _file = `${ _dir }/${ file }`

    //                     const name = path.basename( path.dirname(file) )


    //                     // $Console.Notice('Copy', _file, '=>', `${ to }/${ name }` )

    //                     $Console.Notice('Copy', file )
                        

    //                     // fs.copyFile(`${ _file }`, `${ to }/${ name }.html`, ()=>{

    //                     //     $Console.Success('Mount Component', name)
                            
    //                     // })
                        
    //                 })
                    
    //             }

                    

    //         },
            
    //     })
        
    // )







    /**
     * Build Scene Activities
     */
    .Add(

        new SensenRawCli.Child({

            iD: `-activities`,

            Title: `Sensen Activities Builder`,

            About: `Build activities`,

            Execute: (args) => {

                const dir = path.relative(process.cwd(), sensenConfig.path.appActivities);

                const files = (args.length) ? args : glob.readdirSync( `${dir}/**/index.html` );

                const to = `${ sensenConfig.path.public }/sensen/activities`


                
                
                if(!fs.existsSync(to)){
                    
                    fs.mkdir(to, { recursive: true}, ()=>{

                    })
                    
                }

                if(Array.isArray(files)){

                    files.forEach(file=>{

                        const name = path.basename( path.dirname(file) )

                        fs.copyFile(`${ process.cwd() }/${ file }`, `${ to }/${ name }.html`, ()=>{

                            $Console.Success('Mount Activity', name)
                            
                        })
                        
                    })
                    
                }

                    

            },
            
        })
        
    )









    /** * Démarrage */
    .Run( SensenRawCli.Create.Args(process.argv, 2) )

;



