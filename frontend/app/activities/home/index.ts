import { Component } from "sensen-jutsu";
import { Activity } from "sensen-jutsu/activity";
import { FxScalingIn, FxScalingOut, FxSlideHorizontal, FxSlideVertical } from "sensen-jutsu/animation/preset";
import mockup from "./index.activity";




export const HomeActivity = Activity<HomeActivityState>({
    
    name:'hello',

    state:{

        ref: 'SubTitle',

    },

    methods:{

    },


    transition:{

        onbuild: FxSlideHorizontal,

        ondestroy: FxSlideHorizontal,
        
    },
    

    
    render({element, children, state}){

        return mockup;

    }
    
})
