import SensenPluginModal from "@PluginsScript/kit/modal";
SensenPluginModal.$use();
export function TenzoPostPublisher(component) {
    const modal = SensenPluginModal.Open(`<sense-tenzo-post-publisher></sense-tenzo-post-publisher>`, {
        iD: 'tenzo-publisher',
        title: 'Publier un article',
        locked: true
    });
}
