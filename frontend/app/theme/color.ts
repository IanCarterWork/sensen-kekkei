
import SensenThemeColor from "sensen-plugin-themecolor";
import SensenDarkTone from "sensen-plugin-themecolor/tone/dark";
import SensenLightTone from "sensen-plugin-themecolor/tone/light";
import SensenNightTone from "sensen-plugin-themecolor/tone/night";

import { AppDefaultPalette } from "./palette";



const AppThemeColor = (new SensenThemeColor())

    .add(AppDefaultPalette)
    
    .add(SensenDarkTone)
    
    .add(SensenNightTone)
    
    .add(SensenLightTone)
    
    // .add(SensenSnowTone)
    
    .render(true)
    
    .usePalette("default", true)

    // .useTone("default", true)
    
;


export default AppThemeColor