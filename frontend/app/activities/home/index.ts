import { Component } from "sensen-jutsu";
import { Activity } from "sensen-jutsu/activity";
import { FxScalingIn, FxScalingOut, FxSlideHorizontal, FxSlideVertical } from "sensen-jutsu/animation/preset";
import SensenThemeColor from "sensen-plugin-themecolor";
import mockup from "./index.activity";
import AppInfo from "@Main/sensen.info"

import DataStackPosts from "@App/dataStack/posts"
import SensenPluginModal from "sensen-plugin-modal";


export const HomeActivity = Activity<HomeActivityState>({
    
    name:'hello',

    state:{

        ref: 'SubTitle',

        welcome: `Bienvenue dans`,

        activityname: `Démarrer`,

        name: `${ AppInfo.title }`,

        version: `${ AppInfo.version }`,

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
            
        },

        openPost({ record, state }){

            if(record){

                if(record.node instanceof HTMLElement && typeof state.posts == 'object'){

                    const id = (record.node.getAttribute('post-id') || false) as keyof typeof state.posts;

                    const post = (state.posts[ id ] || false) as IDataStackPost;

                    if(post){

                        const modal = new SensenPluginModal({
                                                    
                            iD: 'read-post',
                        
                            title: post.title,
                        
                            locked: true,
                        
                        });


                        modal.$open(`<sense-post-reader
                            
                            ${ (Object.entries(post)).map((entry)=>

                                ` state:${ entry[0] }="${ (entry[1] || '') as string }" `
                                
                            ) }
                        
                         ></sense-post-reader>`)

                    }


                    
                }
                
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
