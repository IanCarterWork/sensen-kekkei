import Sensen from "sensen-jutsu";
import AppThemeColor from "@Themes/color";
const KitHeader = new Sensen.Component({
    name: 'kit-header',
    template: true,
    emit: {},
    props: {
        icon: `home`,
        title: ``,
        // title: `${ Manifest.app.title }`,
    },
    state: {},
    methods: {
        toggleTone({ self, event }) {
            // console.log('Self', self, AppThemeColor)
            AppThemeColor.toggleTone();
        },
        goPublish({ self, event }) {
            location.href = '#publish';
        },
        goAccount({ self, event }) {
            location.href = '#account';
        },
    },
    // appearance:{
    //     $self:[
    //         {
    //             backgroundColor:'red'
    //         }
    //     ]
    // },
});
export default KitHeader;
