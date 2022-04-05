import { SceneActivity } from "sensen-jutsu/activity";
import { FxSlideHorizontal } from "sensen-jutsu/fx/preset";
const sensenWindow = {};
export const FeedsActivity = new SceneActivity({
    name: 'feeds',
    route: 'feeds',
    arguments: ['sdsd'],
    props: {
        title: 'Hello My Screen',
        icon: 'rss',
        message: 'Salut Mes guys'
    },
    methods: {
        toggleTone({ self, event }) {
            sensenWindow.AppThemeColor.toggleTone();
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
    appearance: {},
});
