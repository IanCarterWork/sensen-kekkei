import { SceneActivity } from "sensen-jutsu/activity";
import { FxSlideHorizontal } from "sensen-jutsu/fx/preset";
// import { TenzoMapBing } from "@App/functions/tenzo/maps.bing";
import SensenPluginMaps from "@PluginsScript/tenzo/maps";
const sensenWindow = {};
SensenPluginMaps.$use();
export const DriveShopActivity = new SceneActivity({
    name: 'driveshop',
    route: 'driveshop',
    // arguments: ['sdsd'],
    props: {
        title: 'ShowRoom',
    },
    state: {
        productCategories: [
            {
                iD: 1,
                title: "Categorie 1",
                about: "Description de la catégorie",
                thumb: "/assets/images/app-icon-square.png",
            },
            {
                iD: 2,
                title: "Categorie 2",
                about: "Description de la catégorie",
                thumb: "/assets/images/app-icon-square.png",
            },
            {
                iD: 3,
                title: "Categorie 3",
                about: "Description de la catégorie",
                thumb: "/assets/images/app-icon-square.png",
            },
            {
                iD: 3,
                title: "Categorie 4",
                about: "Description de la catégorie",
                thumb: "/assets/images/app-icon-square.png",
            },
            {
                iD: 4,
                title: "Categorie 5",
                about: "Description de la catégorie",
                thumb: "/assets/images/app-icon-square.png",
            },
        ]
    },
    methods: {
        loadMap({ self, event }) {
            // TenzoMapBing.Load('#')
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
