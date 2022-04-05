
    res.setHeader('content-type','text/javascript')

    try{

        const files = [

            path.resolve(sensenConfig.path.pipe, req.params[0] || 'index.js' ),
            
            path.resolve(sensenConfig.path.pipe, `${ req.params[0] || 'index' }.js` ),

            path.resolve(__dirname, `../../node_modules/${ req.params[0] }`),

            path.resolve(__dirname, `../../node_modules/${ req.params[0] }.js`),
            
            path.resolve(__dirname, `../../node_modules/${ req.params[0] }/index.js`),

        ];

        let found = false
        

        files.map(file=>{

            file = path.resolve(process.cwd(), file)

            $Console.Log('Module', file, 'find')


            if(found === true){ return false; }
            

            if(fs.existsSync(file)){

                if(fse.statSync(file).isDirectory()){ return false; }

                // res.sendFile(file)

                let data = fse.readFileSync(file, 'utf-8')

                let regex = /import([ \n\t]*(?:[^ \n\t\{\}]+[ \n\t]*,?)?(?:[ \n\t]*\{(?:[ \n\t]*[^ \n\t"'\{\}]+[ \n\t]*,?)+\})?[ \n\t]*)from[ \n\t]*(['"])([^'"\n]+)(?:['"])/g

                let findImports = [...data.matchAll(regex)]


                if(findImports){

                    findImports.map(entry=>{

                        let trans = `${ (entry[3]).trim() }`

                        // console.log(trans)

                        if(trans.substring(0, 1) != "."){

                            trans = `./${ trans }`
                            
                        }
                        
                        data = data.replace(entry[0], `import ${ entry[1] } from "${ trans }"`)
                        
                    })
                    
                }
                
                
                // console.log('Find Import', data )

                $Console.Notice('Module', file, 'loaded')

                
                // res.send(data)
                
                found = true;

                return;
                
            }


            // res.send(` /* Sensen Pipie Invalid */ ${ file }`)
    

        })

        
        

        if(!found){

            // res.send(`
            // /* Sensen Pipie Not found */
            // console.log("Sensen Pipie Not found", "${ req.params[0] }")
            // `)

        }
        
        
        
        // $Console.Log(req.params[0], files )
                
    }

    catch(er){

        // res.send(`
        // /* Sensen Pipie Error */
        // console.log("Sensen Pipie Error", ${ JSON.stringify(er) })
        // `)

        console.error("Error detected \n", er)
        
    }
    