import { $Component, Jutsu } from "sensen-jutsu"
import { SensenRouter, SensenRouterEntry } from "sensen-jutsu/router"
import { HomeActivity } from "./activities/home"




Jutsu.Kuchiyoce<AppState>('sandbox', {

    state:{

        appName: 'Sensen Terminal'

    },
    
    main(state, canvas){
        

        return (new SensenRouter({

            default: 'home/coming/home',

            canvas
            
        }))

        .add(new SensenRouterEntry({
            
            pattern: 'home',
            
            method: 'get',
            
            component: HomeActivity
            
        }))

        .run(state)
        
    }
})