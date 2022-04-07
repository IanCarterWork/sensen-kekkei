import { Component } from "sensen-jutsu";
import { Activity } from "sensen-jutsu/activity";
import { FxScalingIn, FxScalingOut, FxSlideHorizontal, FxSlideVertical } from "sensen-jutsu/animation/preset";
import SensenThemeColor from "sensen-plugin-themecolor";
import mockup from "./index.activity";
import AppInfo from "@Main/sensen.info"

import DataStackPosts from "@App/dataStack/posts"


export const HomeActivity = Activity<HomeActivityState>({
    
    name:'hello',

    state:{

        ref: 'SubTitle',

        welcome: `Bienvenue dans`,

        activityname: `Démarrer`,

        name: `${ AppInfo.title }`,

        icon: 'assets/images/icon/app-icon-original.png',

        posts: undefined

    },

    construct({ state }){


        setTimeout(()=>{

            state.posts = DataStackPosts()
            
        }, 1962)

    },

    methods:{

        toogleTone(){

            if(window.THEME_COLOR instanceof SensenThemeColor){

                window.THEME_COLOR.toggleTone()
                
            }
            
        }

    },


    transition:{

        onbuild: FxSlideHorizontal,

        ondestroy: FxSlideHorizontal,
        
    },
    

    
    render({element, children, state}){

        return mockup;

    }
    
})
