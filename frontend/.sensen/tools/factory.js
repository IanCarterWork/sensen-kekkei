

const path = require('path')

const sensenConfig = require('../config/env')

const $Console = require('./utilities')

const chokidar = require('chokidar');

const glob = require('glob-fs')({ gitignore: true });

const fs = require("fs");



/**
 * @typedef { { source: string, output: string } | undefined } FactoryUnitResponse
 */




/**
 * Machining
 * @param { string } _file 
 * @returns { Promise<FactoryUnitResponse> }
 */
function Machining(_file){

    const _original = path.relative( (process.cwd()), (_file) ).split('/').slice(1).join('/')

    const source = `${ process.cwd() }/${ path.relative( (process.cwd()), (_file) ) }`

    const rexCSS = _file.match( new RegExp(`(${ path.basename(sensenConfig.path.app) })(.*)\.(css|s[ac]ss|less)$`, 'g') )

    const rexHTML = _file.match( new RegExp(`(${ path.basename(sensenConfig.path.app) })(.*)\.(html|htm|sense|activity|component)$`, 'g') )


    return new Promise((accept, refuse)=>{




        if(rexCSS){

            const base = path.relative( path.basename(process.cwd()), path.dirname(_file) )
                
                .split('/').slice(1).join('/') 

            ;

            const label = path.basename( base )

            const outname = `${ sensenConfig.path.pipe }/${ base }/${ path.basename(_file) }`;
        
            const _to = path.dirname(outname)

            const fn = ()=>{

                fs.copyFile(`${ source }`, `${ outname }`, (err)=>{

                    if(err){ refuse(err); $Console.Error('Appearance Machine', label); return; }

                    const size = fs.statSync(source).size

                    $Console.Notice('Appearance Machine', label, size, 'bytes' )
                    
                    accept({ source: _file, output: outname })
                    
                })
        
            }

            if(!fs.existsSync(_to)){
                    
                fs.mkdir(_to, { recursive: true}, ()=>{ fn(); })
                
            }

            else{ fn(); }

        }




        else if(rexHTML){

            const base = path.relative( path.basename(process.cwd()), path.dirname(_file) )
                
                .split('/').slice(2).join('/')
                
            ;

            const label = path.basename( base )

            const outname = `${ sensenConfig.path.public }/sensen/${ base }.html`;
        
            const _to = path.dirname(outname)

            const fn = ()=>{

                fs.copyFile(`${ source }`, `${ outname }`, (err)=>{

                    if(err){ refuse(err); $Console.Error('Active Machine', label); return; }

                    const size = fs.statSync(source).size

                    $Console.Notice('Active Machine', label, size, 'bytes' )
                    
                    accept({ source: _file, output: outname })
                    
                })
        
            }

            if(!fs.existsSync(_to)){
                    
                fs.mkdir(_to, { recursive: true}, ()=>{ fn(); })
                
            }

            else{ fn(); }

        }




        else{

            accept(undefined)
            
        }

        
    })

}




const SensenFactory = {

    /**
     * @type { chokidar.FSWatcher }
     */
    Watcher:null,




    Machining,




    /**
     * @returns { Promise<{ factory:SensenFactory, promises: FactoryUnitResponse }> }
     */
    async Main(){

        return new Promise(async (accept, refuse)=>{

            const _files = glob.readdirSync(`${ path.relative(process.cwd(), sensenConfig.path.app) }/**/*`)

            /**
             * @type { Promise<FactoryUnitResponse>[] }
             */
            const promised = []

            if(Array.isArray( _files )){
            
                _files.map(async _file=>{

                    const abspath = path.resolve(process.cwd(), (_file).split('/').slice(1).join('/') )
              
                    promised.push(
                        
                        this.Machining(abspath)
                        
                    )
                    
                })
                
            }
    
            Promise.all(promised).then(res=>{

                accept({
                    factory: this,
                    promises: res
                })
                
            }).catch(err=>{

                refuse(err)
                
            })
            
        })

    },




    ActiveWatcher(){

        this.Watcher = chokidar.watch( sensenConfig.path.app ,{ persistent: true });

        this.Watcher

            .on('change', async (filename)=>{

                $Console.Log('Updating', path.relative(sensenConfig.path.app, filename))

                this.Machining(filename)

            })

        ;

        return this.Watcher;

    }
    
}


module.exports = SensenFactory
