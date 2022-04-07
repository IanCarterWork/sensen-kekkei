import { Activity } from "sensen-jutsu/activity";
import { FxSlideHorizontal } from "sensen-jutsu/animation/preset";
import mockup from "./index.activity";
export const HomeActivity = Activity({
    name: 'hello',
    state: {
        ref: 'SubTitle',
    },
    methods: {},
    transition: {
        onbuild: FxSlideHorizontal,
        ondestroy: FxSlideHorizontal,
    },
    render({ element, children, state }) {
        return mockup;
    }
});
