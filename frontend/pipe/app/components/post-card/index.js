import Sensen from "sensen-jutsu";
const UiPostCard = new Sensen.Component({
    name: 'post-card',
    template: true,
    emit: {
        ready($self) {
            // console.warn('Post is Ready', $self)
            // $self.emit.$options.element
        }
    },
    props: {
        slug: '',
        storename: '',
        about: '',
        description: '',
        galery: "[]",
        liked: 0,
        commented: 0,
        shared: 0,
        tags: "[]",
    },
    state: {},
    methods: {},
    // appearance:{
    //     $self:[
    //         {
    //             backgroundColor:'red'
    //         }
    //     ]
    // },
});
export default UiPostCard;
