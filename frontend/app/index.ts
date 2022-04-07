import { $Component, Jutsu } from "sensen-jutsu"
import { SensenRouter, SensenRouterEntry } from "sensen-jutsu/router"
import { HomeActivity } from "./activities/home"

import INITIALIZE_COMPONENTS from "./components"
import INITIALIZE_THEME_COLOR from "./theme/color"



window.SENSE_ICON_DEFAULT_STYLE = 'light';

INITIALIZE_THEME_COLOR('default', 'light')

INITIALIZE_COMPONENTS();



Jutsu.Kuchiyoce<AppState>('root', {

    state:{

        appName: 'Sensen Terminal'

    },
    
    main(state, canvas){
        

        return (new SensenRouter({

            default: 'home',

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