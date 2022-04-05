
const $Console = {

    Parse(args, foreColor, bgColor){

        const a = []

        if(args.length){

            for (let x = 0; x < args.length; x++) {

                if(typeof args[x] == 'string' && x === 0){ a.push("\x1b[0m"), a.push(bgColor || ""), a.push(foreColor || "\x1b[37m"); }

                if(typeof args[x] == 'number'){  
                    a.push("\x1b[36m"); 
                }

                a.push(args[x])
                
                if(typeof args[x] == 'number'){ a.push("\x1b[0m"); }

                if(typeof args[x] == 'string' && x === 0){ a.push("\x1b[0m"); }

            }

            a.push("\x1b[0m")

        }

        return a

    },


    Raw(...args){

        console.log.apply(this, ...args)

        return this;
        
    },
    

    Log(...args){

        return this.Raw(this.Parse(args||[], "\x1b[37m", "\x1b[40m"))

    },

    Notice(...args){

        return this.Raw(this.Parse(args||[], "\x1b[37m", "\x1b[44m"))


    },

    Success(...args){

        return this.Raw(this.Parse(args||[], "\x1b[37m", "\x1b[42m"))


    },

    Warning(...args){

        return this.Raw(this.Parse(args||[], "\x1b[30m", "\x1b[43m"))


    },

    Error(...args){

        return this.Raw(this.Parse(args||[], "\x1b[37m", "\x1b[41m"))


    },

    Message(...args){

        return this.Raw(this.Parse(args||[], "\x1b[30m", "\x1b[47m"))


    },

    Lite(...args){

        return this.Raw(this.Parse(args||[], "\x1b[39m", ""))


    },

    
}







module.exports = $Console
