
import SensenThemeColor from "sensen-plugin-themecolor";
import SensenDarkTone from "sensen-plugin-themecolor/tone/dark";
import SensenLightTone from "sensen-plugin-themecolor/tone/light";
import SensenNightTone from "sensen-plugin-themecolor/tone/night";
import SensenSnowTone from "sensen-plugin-themecolor/tone/snow";

import { AppDefaultPalette } from "./palette";





export type ThemeColorAvailablePalettes = 'default'

export type ThemeColorAvailableTones = 'light' | 'dark' | 'night' | 'snow'



export default function INITIALIZE_THEME_COLOR(
    
    palette : ThemeColorAvailablePalettes = 'default',

    tone : ThemeColorAvailableTones = 'light'
    
){


    return (new SensenThemeColor())
        
        .add(AppDefaultPalette)
        
        .add(SensenDarkTone)
        
        .add(SensenNightTone)
        
        .add(SensenLightTone)
        
        .add(SensenSnowTone)
        
        .render(true)
        
        .usePalette(palette || "default")
        
        .useTone(tone || "default")
        
    ;

    
}
