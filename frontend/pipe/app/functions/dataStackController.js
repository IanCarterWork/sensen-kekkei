import Manifest from "@App/manifest";
import DataStackService from "@PluginsScript/http/service/datastack";
const dataStackController = new DataStackService({
    NativeProvider: Manifest.api.provider,
    Lang: 'fr-FR',
    APIKey: 'VeWj3xb-QzMiOzV-kbSFMvl-JBAYpWm',
    AppiD: Manifest.app.iD,
    Version: '1.0',
    PiD: 1000,
});
export default dataStackController;
