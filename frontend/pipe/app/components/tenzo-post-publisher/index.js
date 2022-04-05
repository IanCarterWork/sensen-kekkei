import Sensen from "sensen-jutsu";
import SensenPluginStages from "@PluginsScript/kit/stages";
SensenPluginStages.$use();
const SenseTenzoPostPublisher = new Sensen.Component({
    name: 'tenzo-post-publisher',
    template: true,
    emit: {},
    props: {
        icon: `home`,
        title: ``,
    },
    state: {
        publishTypes: [
            {
                slug: "post",
                label: "Publication",
                icon: "paper-plane",
            },
            {
                slug: "product",
                label: "Produit",
                icon: "bag-shopping",
            },
            {
                slug: "showroom",
                label: "ShowRoom Event",
                icon: "rectangle-vertical-history",
            },
            {
                slug: "alert",
                label: "Vente Flash",
                icon: "cart-shopping-fast",
            },
        ],
    },
    methods: {
    // publishArticle(component){
    // }
    },
    // appearance:{
    //     $self:[
    //         {
    //             backgroundColor:'red'
    //         }
    //     ]
    // },
});
export default SenseTenzoPostPublisher;
