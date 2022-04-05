declare const UiSideLeft: import("sensen-jutsu").Component<{
    dashboardMenu: {
        label: string;
        icon: string;
        route: string;
    }[];
    accountMenu: {
        label: string;
        icon: string;
        route: string;
    }[];
}, {
    icon: "home";
    title: "";
}, import("sensen-jutsu/index.t").ComponentMethodRaw<{
    dashboardMenu: {
        label: string;
        icon: string;
        route: string;
    }[];
    accountMenu: {
        label: string;
        icon: string;
        route: string;
    }[];
}, {
    icon: "home";
    title: "";
}>>;
export default UiSideLeft;
