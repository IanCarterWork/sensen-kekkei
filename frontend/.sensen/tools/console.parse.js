const $Console = require("./utilities");




function ConsoleChunk(chunk){

    /**
     * @type { string[] }
     */
     const lines = (chunk||'').trim().split('\n');
    
    const content = [];


     if(lines.length){

        lines.map(line=>{

            const ln = (line||'').trim()

            const frags = ln.split(' ')

            $Console.Log((`${ frags[0] }`).toLowerCase(), ...(frags.slice(1)))
            
        })
        
    }


    return ConsoleChunk;
    
}



module.exports = ConsoleChunk