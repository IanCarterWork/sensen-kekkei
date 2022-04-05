import { SceneActivity } from "sensen-jutsu/activity";
import { FxSlideHorizontal } from "sensen-jutsu/fx/preset";
import AppThemeColor from "../../theme/color";
const sensenWindow = {};
export const UiActivity = new SceneActivity({
    name: 'ui',
    route: 'ui',
    // arguments: ['sdsd'],
    props: {
        title: 'Hello My Screen',
        icon: 'home',
        message: 'Salut Mes guys'
    },
    options: {
        wireframe: 'basic',
        transition: {
            entry: new FxSlideHorizontal,
            exit: new FxSlideHorizontal,
        }
    },
    methods: {
        toggleTone({ self, event }) {
            console.log('Self', self, AppThemeColor);
            AppThemeColor.toggleTone();
        },
    },
    emit: {
        ready(activity) {
            // console.warn('Activity is Ready', activity)
        }
    },
    appearance: {},
});
