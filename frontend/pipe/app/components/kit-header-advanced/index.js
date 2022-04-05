import Sensen from "sensen-jutsu";
import Manifest from "@App/manifest";
import AppThemeColor from "@Themes/color";
const KitHeaderAdvanced = new Sensen.Component({
    name: 'kit-header-advanced',
    template: true,
    emit: {},
    props: {
        icon: `home`,
        title: ``,
        // title: `${ Manifest.app.title }`,
    },
    state: {
        menu: Manifest.menu.advanced,
    },
    methods: {
        activeMenu() {
            const key = arguments[0] || '';
            const hash = location.hash || '#feeds';
            const match = hash.match(new RegExp(`^${key}`, 'g'));
            return match;
        },
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
export default KitHeaderAdvanced;
