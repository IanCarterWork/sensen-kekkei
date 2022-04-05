declare const UiSideRight: import("sensen-jutsu").Component<{
    footerMenu: {
        label: string;
        icon: string;
        route: string;
    }[];
    top: {
        label: string;
        thumb: string;
        description: string;
        slug: string;
    }[];
}, {
    icon: "home";
    title: "";
}, import("sensen-jutsu/index.t").ComponentMethodRaw<{
    footerMenu: {
        label: string;
        icon: string;
        route: string;
    }[];
    top: {
        label: string;
        thumb: string;
        description: string;
        slug: string;
    }[];
}, {
    icon: "home";
    title: "";
}>>;
export default UiSideRight;
