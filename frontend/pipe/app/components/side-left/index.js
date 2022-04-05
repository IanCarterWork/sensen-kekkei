import Sensen from "sensen-jutsu";
import Manifest from "@App/manifest";
import { TenzoPostPublisher } from "@App/functions/tenzo/post.publisher";
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
        publishArticle(component) {
            // component.router.navigate('sdvs', undefined, )
            TenzoPostPublisher(component);
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
