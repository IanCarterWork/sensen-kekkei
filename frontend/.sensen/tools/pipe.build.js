const { exec } = require("child_process");

/**
 * Task : build pipe
 */
function buildPipe(){

    return new Promise((accept, refuse)=>{

        exec(`node .sensen/bin/build -pipe`, (err, stdout, stderr)=>{

            if(err){

                refuse(err)

                return;
                
            }

            accept({ stdout, stderr })

        })
        
    })
    
}



module.exports = buildPipe
