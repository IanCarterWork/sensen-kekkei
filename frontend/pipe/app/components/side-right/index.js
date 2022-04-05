import Sensen from "sensen-jutsu";
import Manifest from "@App/manifest";
const UiSideRight = new Sensen.Component({
    name: 'side-right',
    template: true,
    emit: {},
    props: {
        icon: `home`,
        title: ``,
    },
    state: {
        footerMenu: Manifest.menu.footer,
        top: [
            {
                label: `Boutique`,
                thumb: `Boutique`,
                description: `description`,
                slug: `iD`,
            },
            {
                label: `Boutique`,
                thumb: `Boutique`,
                description: `description`,
                slug: `iD`,
            },
            {
                label: `Boutique`,
                thumb: `Boutique`,
                description: `description`,
                slug: `iD`,
            },
        ]
    },
    methods: {},
    // appearance:{
    //     $self:[
    //         {
    //             backgroundColor:'red'
    //         }
    //     ]
    // },
});
export default UiSideRight;
