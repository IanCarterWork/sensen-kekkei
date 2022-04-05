import { Component } from "sensen-jutsu";
import { FxSlideHorizontal } from "sensen-jutsu/animation/preset";
import mockup from "./index.activity";
export const HomeActivity = Component({
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
