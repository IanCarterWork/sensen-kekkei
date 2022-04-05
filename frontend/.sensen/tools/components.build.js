const { exec } = require("child_process");
const path = require("path");
const process = require("process");
const $Console = require("./utilities");

/**
 * Task : build components
 */
function buildComponents(filename = null){

    return new Promise((accept, refuse)=>{

        exec(`cd "${ process.cwd() }" && node .sensen/bin/build -components ${ filename ? path.relative(__dirname, filename||'') : '' }`, (err, stdout, stderr)=>{

            if(err){

                refuse(err)

                return;
                
            }

            accept({ stdout, stderr })

        })
        
    })
    
}



module.exports = buildComponents
