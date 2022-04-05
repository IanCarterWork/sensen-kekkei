import { SceneActivity } from "sensen-jutsu/activity";
import { FxSlideHorizontal } from "sensen-jutsu/fx/preset";
import { SensenAppearance } from "sensen-jutsu/appearance";
import Manifest from "@App/manifest";
import KitHeader from "@Components/kit-header";
import KitInput from "@Components/kit-input";
import SensenFormTransactions from "@App/functions/form.transaction";
import KitLoading from "@PluginsScript/kit/loading";
import styler from "./index.scss";
import dataStackController from "@App/functions/dataStackController";
KitHeader.use();
KitInput.use();
export const LoginActivity = new SceneActivity({
    name: 'login',
    route: 'login',
    appearance: SensenAppearance.absorbent(styler),
    props: {
        title: 'Se connecter',
        welcome: `Bienvenue sur ${Manifest.app.title}`
    },
    state: {
        activityTitle: `Connexion - ${Manifest.app.title}`
    },
    methods: {
        // toggleTone({self, event}){
        //     console.log('Self', self, AppThemeColor)
        //     AppThemeColor.toggleTone()
        // },
        connect({ self, event }) {
            const transaction = SensenFormTransactions.state(event.target);
            // const transaction = new FormData(event.target as HTMLFormElement)
            // transaction.append()
            console.warn('Send dataStack', transaction);
            dataStackController.Post({
                Name: 'Connect/Account/Signin',
                Output: '-json',
                ContentType: 'application/json',
                Data: transaction.results,
                Success: r => {
                    console.warn('DataStack Response is', r);
                }
            });
            KitLoading.Show('login', {
                message: 'Connexion...',
                size: '@bigger',
                color: '@one',
                // backcolor:'@black',
                type: '@default',
                style: '@circle',
            });
            setTimeout(() => {
                KitLoading.Hide('login');
            }, 3000);
        }
    },
    options: {
        wireframe: 'basic',
        transition: {
            entry: new FxSlideHorizontal,
            exit: new FxSlideHorizontal,
        }
    },
    emit: {
        ready(activity) {
            // console.warn('Activity is Ready', activity)
        }
    },
});
