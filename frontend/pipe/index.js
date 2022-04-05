import Sensen from "sensen-jutsu";
import { Jutsu } from "sensen-jutsu/jutsu";
import { SensenRouter } from "sensen-jutsu/router";
import { AboutActivity } from "./activities/about";
import { HomeActivity } from "./activities/home/index";
import { LoginActivity } from "./activities/login";
import { UiActivity } from "./activities/ui";
import AppThemeColor from "./theme/color";
AppThemeColor.useTone("light", true);
export default Sensen.Main(Jutsu.Kuchiyose({
    name: 'root',
    main(canvas) {
        const router = (new SensenRouter({
            default: 'login',
            canvas,
            baseURL: ''
        }))
            .get(LoginActivity)
            .get(HomeActivity)
            .get(AboutActivity)
            .get(UiActivity)
            .render();
    }
}));
