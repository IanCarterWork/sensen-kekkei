
const fs = require('fs');

// const fse = require('fs-extra');

const path = require('path');

const express = require('express');

const app = express();

const http = require("http");

const server = http.createServer(app);

const { Server } = require('socket.io');

const io = new Server(server);

// const chokidar = require('chokidar');

const { exec } = require('child_process');



const sensenConfig = require('../config/env');

const TemplateBuildIndex = require('../tools/template');

const $Console = require('../tools/utilities');

const { parse } = require("node-html-parser");

const PipeWatch = require('../tools/pipe.watch');

const buildPipe = require('../tools/pipe.build');

const SceneActivitiesWatch = require('../tools/activities.watch');

const buildActivities = require('../tools/activities.build');



sensenConfig.port = sensenConfig.port || 9162




app.get('/', async (req, res) => {

    await TemplateBuildIndex()
    
        .then(data=>{

            const dom = parse(data)

            const body = dom.querySelector('html > body')

            if(body){

                body.innerHTML = `${ body.innerHTML }\n${ LiveReloadScript() }`

                data = dom.outerHTML;

            }

            res.send(data)

        })

        .catch(er=>{

            $Console.Error('Compilation Failed', er)

            res.send(`<h1>Error</h1>div>${ JSON.stringify(er) }</div>`)
            
        })



    $Console.Log('Sensen SDK Serve', 'waiting for update...')

    
})




app.get('/sensen.livereload.socekt.js', (req, res)=>{

    res.send(`

        const socket = io();

        socket.on("livereload update", (data)=>{
    
            socket.emit("livereload trigger", {

                response: true,
                
                title: "Update",
                
                about: "received"
    
            });
                
            // console.log('Update : Reload App', data)

            history.reload()
        
        })

    `)
    
})





app.get('*', (req, res)=>{

    const filename = `${ sensenConfig.path.public }/${ req.path }`

    if(fs.existsSync(filename)){

        if(!fs.statSync(filename).isDirectory()){

            res.sendFile(filename)

        }

        else{

            res.send('/* Not File */')

        }

        
    }

    else{

        res.send('/* Not found */')
        
    }
            
})





/**
 * Build Pipe
 */
$Console.Message('Build', 'Pipe')

buildPipe()



/**
 * Build SceneActivities
 */
$Console.Message('Build', 'Scene Activities')

buildActivities()







/**
 * Connection Events
 */
io.on('connection', async (socket)=>{


    // /**
    //  * Listen Trigger
    //  */
    socket.on("livereload trigger", (data)=>{

        if(typeof data == 'object'){

            if(data.response == true){

                $Console.Log(`${ data.title || 'Trigger'}`, data.about || '')
                
            }

            else{

                $Console.Warning(`${ data.title || 'Trigger'}`, data.about || '')
                
            }

            
        }

        
    })
    
        
})



/**
 * Listen Disconnection
 */
io.on('disconnect', (socket)=>{

    $Console.Success('WebSocket', 'Disonnected')
    
})



/**
 * Initialize Pipe Watcher
 */

PipeWatch()

.then(filename=>{

    const bsname = path.relative(process.cwd(), filename)

    io.emit("livereload update", {

        response: true,
    
        title: "Pipe Update",
    
        about: "new watch",

        file: bsname,
    
    })

})





/**
 * Intialize Activities Watcher
 */

SceneActivitiesWatch()

.then(filename=>{

    const bsname = path.relative(process.cwd(), filename)

    io.emit("livereload update", {

        response: true,
    
        title: "Pipe Update",
    
        about: "new watch",

        file: bsname,

        time: new Date(),
    
    })

    
})



/**
 * SCSS
 */

// $Console.Notice('Active Watcher', `sass --watch`)
 
 const watchSCSS = exec(
     
    `sass --watch ${ sensenConfig.path.cssPlugins }:${ sensenConfig.path.public }/sensen/plugins/css`, 
 
 )

watchSCSS.on('spawn',()=>{

    $Console.Message('Plugin CSS Watch', 'done')
    
})

watchSCSS.on('data',(d)=>{

    $Console.Message('Plugin CSS Data', d)
    
})

watchSCSS.on('message',(d)=>{

    $Console.Message('Plugin CSS Message', d)
    
})

$Console.Message('Active Watchers', 'Ready')







io.emit("livereload ready", {

    response: true,
    
    title: "Welcome",
    
    about: "Ready to peer"

})








server.listen(sensenConfig.port, ()=>{

    $Console.Notice(`Sensen LiveReload`)

    $Console.Success(`DevServer`, '\x1b[4m', `http://localhost:${ sensenConfig.port }`, '\x1b[40m')
    
})




function LiveReloadScript(){

    return `
<!-- Sensen Live Reload - BEGIN -->

<script src="/socket.io/socket.io.js"></script>

<script src="/sensen.livereload.socekt.js"></script>

<!-- Sensen Live Reload - END -->
    `

}