import { Jutsu } from "sensen-jutsu";
import { SensenRouter, SensenRouterEntry } from "sensen-jutsu/router";
import { HomeActivity } from "./activities/home";
Jutsu.Kuchiyoce('sandbox', {
    state: {
        appName: 'Hell Guys'
    },
    main(state, canvas) {
        return (new SensenRouter({
            default: 'home/coming/home',
            canvas
        }))
            .add(new SensenRouterEntry({
            pattern: 'home',
            method: 'get',
            component: HomeActivity
        }))
            .run(state);
    }
});
