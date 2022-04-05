export default class SensenPluginAssetsScript {
    static async Inject(url, lazy) {
        return new Promise((resolved, rejected) => {
            let get = document.querySelector(`script[src='${url}']`);
            if (get) {
                get.parentNode?.removeChild(get);
            }
            const e = (document.createElement('script'));
            e.setAttribute('type', 'text/javascript');
            if (lazy) {
                e.setAttribute('defer', '');
                e.setAttribute('async', '');
            }
            requestAnimationFrame(() => {
                e.onload = () => { resolved(e); };
                e.onerror = (err) => { rejected(err); };
                e.setAttribute('src', url);
                document.head.appendChild(e);
            });
        });
    }
}
