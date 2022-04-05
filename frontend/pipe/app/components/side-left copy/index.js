import Sensen from "sensen-jutsu";
import Manifest from "@App/manifest";
import SensenPluginModal from "@PluginsScript/kit/modal";
SensenPluginModal.$use();
const UiSideLeft = new Sensen.Component({
    name: 'side-left',
    template: true,
    emit: {},
    props: {
        icon: `home`,
        title: ``,
    },
    state: {
        dashboardMenu: Manifest.menu.dashboard,
        accountMenu: Manifest.menu.account,
    },
    methods: {
        publishArticle({ self, event, router }) {
            const modal = SensenPluginModal.Open(`<sense-tenzo-post-publisher></sense-tenzo-post-publisher>`, {
                title: 'Publier un article'
            });
        }
    },
    // appearance:{
    //     $self:[
    //         {
    //             backgroundColor:'red'
    //         }
    //     ]
    // },
});
export default UiSideLeft;
