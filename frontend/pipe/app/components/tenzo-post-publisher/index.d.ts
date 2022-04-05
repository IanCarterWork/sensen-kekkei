declare const SenseTenzoPostPublisher: import("sensen-jutsu").Component<{
    publishTypes: {
        slug: string;
        label: string;
        icon: string;
    }[];
}, {
    icon: "home";
    title: "";
}, import("sensen-jutsu/index.t").ComponentMethodRaw<{
    publishTypes: {
        slug: string;
        label: string;
        icon: string;
    }[];
}, {
    icon: "home";
    title: "";
}>>;
export default SenseTenzoPostPublisher;
