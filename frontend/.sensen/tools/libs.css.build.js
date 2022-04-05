const { exec } = require("child_process");

/**
 * Task : build activities
 */
function buildLibCSS(filename = null){

    return new Promise((accept, refuse)=>{

        exec(`node .sensen/bin/mount -lib css`, (err, stdout, stderr)=>{

            if(err){

                refuse(err)

                return;
                
            }

            accept({ stdout, stderr })

        })
        
    })
    
}



module.exports = buildLibCSS
