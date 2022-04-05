declare const Manifest: {
    versionNumber: number;
    version: string;
    app: {
        title: string;
        iD: string;
    };
    api: {
        provider: string;
        keys: {
            bingMap: string;
            yandexMap: string;
        };
    };
    menu: {
        advanced: {
            label: string;
            icon: string;
            route: string;
        }[];
        dashboard: {
            label: string;
            icon: string;
            route: string;
        }[];
        account: {
            label: string;
            icon: string;
            route: string;
        }[];
        footer: {
            label: string;
            icon: string;
            route: string;
        }[];
    };
};
export default Manifest;
