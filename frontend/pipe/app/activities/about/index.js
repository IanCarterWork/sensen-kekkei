import { SceneActivity } from "sensen-jutsu/activity";
import { FxSlideHorizontal } from "sensen-jutsu/fx/preset";
export const AboutActivity = new SceneActivity({
    name: 'about',
    route: 'about',
    props: {
        title: 'Hello My Screen',
        icon: 'info-circle',
        message: 'Salut Mes guys'
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
    appearance: {},
});
