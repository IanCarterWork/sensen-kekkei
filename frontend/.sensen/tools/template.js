
const { render } = require("ejs");

const fs = require("fs")

const path = require("path")



const TemplateBuildIndex = async ()=>{

    return new Promise((done, fail)=>{

		fs.readFile(path.resolve(__dirname, `../template/index.html`), 'utf8' , (err, data) => {

			if (err) { console.error(err); return; }
	
			render( data , {

                links: [],

                scripts: [],
                
            }, { async: true, }).then(compilate=>{

				done(compilate)
				
			}).catch(er=>{

				fail(er)
				
			})
	
		})
        
    })

}


module.exports = TemplateBuildIndex


