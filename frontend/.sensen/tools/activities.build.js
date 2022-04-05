const { exec } = require("child_process");
const process = require("process");

/**
 * Task : build activities
 */
function buildActivities(filename = null){

    return new Promise((accept, refuse)=>{

        exec(`cd "${ process.cwd() }" && node .sensen/bin/build -activities ${ filename || ''}`, (err, stdout, stderr)=>{

            if(err){

                refuse(err)

                return;
                
            }

            accept({ stdout, stderr })

        })
        
    })
    
}



module.exports = buildActivities
