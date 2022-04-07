import SensenThemeColor from "sensen-plugin-themecolor";
import SensenDarkTone from "sensen-plugin-themecolor/tone/dark";
import SensenLightTone from "sensen-plugin-themecolor/tone/light";
import { AppDefaultPalette } from "./palette";
export default function INITIALIZE_THEME_COLOR(palette = 'default', tone = 'light') {
    return (new SensenThemeColor())
        .add(AppDefaultPalette)
        .add(SensenDarkTone)
        // .add(SensenNightTone)
        .add(SensenLightTone)
        // .add(SensenSnowTone)
        .render(true)
        .usePalette(palette || "default")
        .useTone(tone || "default");
}
