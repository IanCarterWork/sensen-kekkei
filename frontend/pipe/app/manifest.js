const Manifest = {
    versionNumber: 1,
    version: '0.0.1',
    app: {
        title: 'Stylivoir.com',
        iD: 'ian.sensen.stylivoir'
    },
    api: {
        provider: `http://localhost:8062/clients/stylivoir.com/backend/public_html/`,
        keys: {
            bingMap: 'AqDEmOMI9rJ20cK1k_Ojk4DP4zFFrq3pQ3BlY_pUJNlzXfsRfiteHL9Nnhjf5r3V',
            yandexMap: '',
            // yandexMap : '9a7d4c48-2df1-4dcf-8563-92ed10fd4126',
            // yandexMap : '5a99f98e-36f2-491e-a9de-dae7bfc7ec8c',
            // yandexMap : 'baf00e52-b622-4a85-af62-b95ff1fcdcbf',
        }
    },
    menu: {
        advanced: [
            {
                label: 'En boutique',
                icon: 'shopping-bag',
                route: '#feeds',
            },
            {
                label: 'showroom',
                icon: 'rectangle-vertical-history',
                route: '#showroom',
            },
            {
                label: 'Drives Shop',
                icon: 'location-dot',
                route: '#driveshop',
            },
            {
                label: 'Recherche',
                icon: 'search',
                route: '#search',
            },
        ],
        dashboard: [
            {
                label: 'Tableau de board',
                icon: 'store',
                route: '#dashboard/overview',
            },
            {
                label: 'Messages',
                icon: 'mailbox',
                route: '#messenger/overview',
            },
            {
                label: 'Produits',
                icon: 'socks',
                route: '#dashboard/products',
            },
            {
                label: 'Commandes',
                icon: 'cart-plus',
                route: '#dashboard/products',
            },
            {
                label: 'Clients',
                icon: 'users',
                route: '#dashboard/clients',
            },
            {
                label: 'Promotions',
                icon: 'tags',
                route: '#dashboard/promo',
            },
            {
                label: 'Paramètres de la boutique',
                icon: 'cog',
                route: '#dashboard/settings',
            },
        ],
        account: [
            {
                label: 'Publications',
                icon: 'rss',
                route: '#account/posts',
            },
            {
                label: 'Confidentialité',
                icon: 'lock',
                route: '#account/privacy',
            },
            {
                label: 'Sécurité',
                icon: 'shield',
                route: '#account/security',
            },
            {
                label: 'Notifications',
                icon: 'bells',
                route: '#account/notifications',
            },
        ],
        footer: [
            {
                label: 'À propos',
                icon: 'info-circle',
                route: '#intl/about',
            },
            {
                label: 'Confidentialités',
                icon: 'lock',
                route: '#intl/about/privacy',
            },
            {
                label: 'Cookies',
                icon: 'cookie-bite',
                route: '#intl/about/cookies',
            },
            {
                label: `Condition d'utilisation`,
                icon: 'shield',
                route: '#intl/about/cgu',
            },
            {
                label: `Aide`,
                icon: 'circle-question',
                route: '#intl/help',
            },
        ]
    }
};
export default Manifest;
