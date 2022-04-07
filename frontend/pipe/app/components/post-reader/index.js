import { Component } from "sensen-jutsu";
import mockup from "./index.component";
export const PostReaderComponent = Component({
    name: 'post-reader',
    state: {
        id: 0,
        title: '',
        about: '',
        content: '',
        thumb: '',
        mediaType: '-image',
        mediaURL: '',
        categories: [],
        created: '',
        updated: '',
        colorone: '',
        colortwo: '',
        avail: false,
    },
    render() {
        return mockup;
    }
});
