import { SceneActivity } from "sensen-jutsu/activity";
import { FxSlideHorizontal } from "sensen-jutsu/fx/preset";
// import { TenzoMapBing } from "@App/functions/tenzo/maps.bing";
import SensenPluginMaps from "@PluginsScript/tenzo/maps";
const sensenWindow = {};
SensenPluginMaps.$use();
export const SearchActivity = new SceneActivity({
    name: 'search',
    route: 'search',
    // arguments: ['sdsd'],
    props: {
        title: 'ShowRoom',
    },
    state: {
        posts: [
            {
                slug: 'SlugID',
                storename: 'IanCarter',
                about: 'Description de la boutique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda in ducimus ipsa eum aliquam dolorem illum sapiente odio, hic dolor, odit nemo nobis. Cupiditate voluptas nulla nemo tempore, eos praesentium.',
                galery: [
                    '/assets/images/thumb.jpg',
                    '/assets/images/banner-01.png',
                    '/assets/images/banner-02.png',
                ],
                liked: 70.9,
                commented: 70.9,
                shared: 70.9,
                tags: [
                    'Robe',
                    'Chemisier',
                    'Ensemble',
                    'Ensemble',
                    'Ensemble',
                    'Ensemble',
                    'Ensemble',
                ],
            },
            {
                slug: 'SlugID',
                storename: 'IanCarter',
                about: 'Description de la boutique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda in ducimus ipsa eum aliquam dolorem illum sapiente odio, hic dolor, odit nemo nobis. Cupiditate voluptas nulla nemo tempore, eos praesentium.',
                galery: [
                    '/assets/images/banner-02.png',
                    '/assets/images/thumb.jpg',
                    '/assets/images/banner-01.png',
                ],
                liked: 70.9,
                commented: 70.9,
                shared: 70.9,
                tags: [
                    'Robe',
                    'Chemisier',
                    'Ensemble',
                ],
            },
            {
                slug: 'SlugID',
                storename: 'IanCarter',
                about: 'Description de la boutique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda in ducimus ipsa eum aliquam dolorem illum sapiente odio, hic dolor, odit nemo nobis. Cupiditate voluptas nulla nemo tempore, eos praesentium.',
                galery: [
                    '/assets/images/banner-01.png',
                    '/assets/images/banner-02.png',
                    '/assets/images/thumb.jpg',
                ],
                liked: 70.9,
                commented: 70.9,
                shared: 70.9,
                tags: [
                    'Robe',
                    'Chemisier',
                    'Ensemble',
                ],
            },
            {
                slug: 'SlugID',
                storename: 'IanCarter',
                about: 'Description de la boutique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda in ducimus ipsa eum aliquam dolorem illum sapiente odio, hic dolor, odit nemo nobis. Cupiditate voluptas nulla nemo tempore, eos praesentium.',
                galery: [
                    '/assets/images/banner-01.png',
                    '/assets/images/thumb.jpg',
                    '/assets/images/banner-02.png',
                ],
                liked: 70.9,
                commented: 70.9,
                shared: 70.9,
                tags: [
                    'Robe',
                    'Chemisier',
                    'Ensemble',
                ],
            },
            {
                slug: 'SlugID',
                storename: 'IanCarter',
                about: 'Description de la boutique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda in ducimus ipsa eum aliquam dolorem illum sapiente odio, hic dolor, odit nemo nobis. Cupiditate voluptas nulla nemo tempore, eos praesentium.',
                galery: [
                    '/assets/images/banner-02.png',
                    '/assets/images/banner-01.png',
                    '/assets/images/thumb.jpg',
                ],
                liked: 70.9,
                commented: 70.9,
                shared: 70.9,
                tags: [
                    'Robe',
                    'Chemisier',
                    'Ensemble',
                ],
            },
            {
                slug: 'SlugID',
                storename: 'IanCarter',
                about: 'Description de la boutique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda in ducimus ipsa eum aliquam dolorem illum sapiente odio, hic dolor, odit nemo nobis. Cupiditate voluptas nulla nemo tempore, eos praesentium.',
                galery: [
                    '/assets/images/banner-02.png',
                    '/assets/images/thumb.jpg',
                    '/assets/images/banner-01.png',
                ],
                liked: 70.9,
                commented: 70.9,
                shared: 70.9,
                tags: [
                    'Robe',
                    'Chemisier',
                    'Ensemble',
                ],
            },
            {
                slug: 'SlugID',
                storename: 'IanCarter',
                about: 'Description de la boutique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda in ducimus ipsa eum aliquam dolorem illum sapiente odio, hic dolor, odit nemo nobis. Cupiditate voluptas nulla nemo tempore, eos praesentium.',
                galery: [
                    '/assets/images/banner-01.png',
                    '/assets/images/banner-02.png',
                    '/assets/images/thumb.jpg',
                ],
                liked: 70.9,
                commented: 70.9,
                shared: 70.9,
                tags: [
                    'Robe',
                    'Chemisier',
                    'Ensemble',
                ],
            },
            {
                slug: 'SlugID',
                storename: 'IanCarter',
                about: 'Description de la boutique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda in ducimus ipsa eum aliquam dolorem illum sapiente odio, hic dolor, odit nemo nobis. Cupiditate voluptas nulla nemo tempore, eos praesentium.',
                galery: [
                    '/assets/images/banner-01.png',
                    '/assets/images/thumb.jpg',
                    '/assets/images/banner-02.png',
                ],
                liked: 70.9,
                commented: 70.9,
                shared: 70.9,
                tags: [
                    'Robe',
                    'Chemisier',
                    'Ensemble',
                ],
            },
            {
                slug: 'SlugID',
                storename: 'IanCarter',
                about: 'Description de la boutique',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda in ducimus ipsa eum aliquam dolorem illum sapiente odio, hic dolor, odit nemo nobis. Cupiditate voluptas nulla nemo tempore, eos praesentium.',
                galery: [
                    '/assets/images/banner-02.png',
                    '/assets/images/banner-01.png',
                    '/assets/images/thumb.jpg',
                ],
                liked: 70.9,
                commented: 70.9,
                shared: 70.9,
                tags: [
                    'Robe',
                    'Chemisier',
                    'Ensemble',
                ],
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
