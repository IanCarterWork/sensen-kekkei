import { SensenEmitter } from "sensen-jutsu/emitter";
import SensenPluginAssetsScript from "@PluginsScript/assets/script";
import Manifest from "@App/manifest";
import { decodeHTMLEntities } from "sensen-jutsu/utilities";
export default class SensenPluginMaps extends HTMLElement {
    constructor(props) {
        super();
        this.$hostOverflow = {};
        this.$hostComputed = {};
        this.$emitter = new SensenEmitter();
        this.$observer = {};
        this.$props = props || {};
        this.$props.host = (typeof this.$props?.host == 'string' ? document.querySelector(this.$props?.host) : (this.$props?.host || document.body));
        this.$underlay = this.querySelector(`[plugin-child="@underlay"]`) || document.createElement('div');
        this.$overlay = this.querySelector(`[plugin-child="@overlay"]`) || document.createElement('div');
        this.$underlay.setAttribute(`plugin-child`, '@underlay');
        this.$overlay.setAttribute(`plugin-child`, '@overlay');
        this.$overlay.setAttribute(`ui-box`, 'shadow:larger');
        this.$overlay.setAttribute(`ui-box`, ':morphism');
        this.appendChild(this.$underlay);
        this.appendChild(this.$overlay);
    }
    connectedCallback() {
        this.$render();
    }
    adoptedCallback() {
    }
    disconnectedCallback() {
    }
    $render() {
        this.$initProps().$initEmitters().$loading();
        navigator.geolocation.getCurrentPosition((p) => this.$open(p), () => {
            this.$loadFailed();
        });
        return this;
    }
    $captureHostState() {
        if (this.$props?.host instanceof HTMLElement) {
            this.$hostComputed = getComputedStyle(this.$props?.host || document.body);
            this.$hostOverflow = {
                x: this.$hostComputed.overflowX,
                y: this.$hostComputed.overflowY,
            };
        }
        return this;
    }
    $disableHostScrolling() {
        if (this.$props?.host instanceof HTMLElement) {
            this.$props.host.style.overflowX = 'none';
            this.$props.host.style.overflowY = 'none';
        }
        return this;
    }
    $enableHostScrolling() {
        if (this.$props?.host instanceof HTMLElement) {
            this.$props.host.style.overflowX = `${this.$hostOverflow.x}`;
            this.$props.host.style.overflowY = `${this.$hostOverflow.y}`;
        }
        return this;
    }
    $initProps() {
        this.$props = this.$props || {};
        const rex = /^plugin\:/;
        const updater = (name, value) => {
            const k = (name || '').replace(rex, '');
            if (k) {
                // @ts-ignore
                this.$props[k] = value;
            }
        };
        if (this) {
            Object.values(this.attributes).map(attribute => {
                if (attribute.name.match(rex)) {
                    updater(attribute.name, attribute.value);
                }
            });
        }
        this.$observer = new MutationObserver((records) => {
            if (records) {
                records.map(record => {
                    if (record.type == 'attributes') {
                        updater(record.attributeName || undefined, this.getAttribute(record.attributeName || '') || undefined);
                    }
                });
            }
        });
        this.$observer.observe(this, {
            attributes: true
        });
        return this;
    }
    $initEmitters() {
        if (this.$underlay) {
            // if(!this.$props?.locked){
            //     this.$underlay.onclick = ()=>{
            //         this.$close();
            //     }
            // }
        }
        return this;
    }
    SetContent(iD) {
        // this.$overlay.innerHTML = content || ''
        console.warn('Set Map Content', iD, this);
        return this;
    }
    $loadFailed() {
        this.setAttribute('plugin-status', '0');
        this.$underlay.innerHTML = `<div ui-flex="column align-center" ui-box="container smaller">
            <i class="fa-thin fa-location-dot-slash fa-7x"></i>
            <div ui-text="big align-center" ui-padding="3x">
                Vous devez partager votre position afin de permet de permettre au système de fonctionner normalement
            </div>
            <button js-share-position ui-rounded="larger" type="button">
                <span button-icon  > <i class="fa-thin fa-location-dot"></i> </span>
                <span button-label  > Partager ma position </span>
            </button>
            <div ui-rounded="larger" ui-text="small align-center" ui-box="error" ui-padding="h:3x v:2x" ui-margin="top:5x">
                <i class="fa-solid fa-exclamation-triangle fa-1x"></i>
                Si le problème persiste, veuillez vérifier votre connexion internet...
            </div>
        </div>`;
        const btn = this.$underlay.querySelector(`[js-share-position]`);
        if (btn) {
            btn.onclick = () => {
                navigator.geolocation.getCurrentPosition((p) => {
                    console.log('Get Current Position', p);
                    this.$open(p);
                });
            };
        }
        return this;
    }
    $loading() {
        this.setAttribute('plugin-status', '0');
        this.$underlay.innerHTML = `<div>
            <i class="fa-thin fa-circle-notch fa-spin fa-7x"></i>
        </div>`;
        return this;
    }
    $unloading() {
        this.setAttribute('plugin-status', '1');
        this.$underlay.innerHTML = ``;
        return this;
    }
    async $open(position) {
        this.$underlay.id = `${this.$props?.id || 'default'}-maparea`;
        console.warn('Open Map', this.$props?.type);
        this.$loading();
        window.SensenPluginMapsCallback = () => {
            this.$unloading();
            var map = new Microsoft.Maps.Map(this.$underlay, {
                zoom: 16
            });
            console.warn('Map SDK loaded', this, position);
            this.$overlayContent();
        };
        setTimeout(() => {
            this.$overlayContent();
        }, 1000);
        switch (this.$props?.type) {
            case '@yandex':
                await SensenPluginAssetsScript.Inject(`http://api-maps.yandex.ru/2.1/?lang=fr_FR&apikey=${Manifest.api.keys.yandexMap}`, true)
                    .then(e => {
                    this.$unloading();
                    ymaps.ready(() => {
                        var map = new ymaps.Map(this.$underlay, {
                            center: [
                                position?.coords.latitude,
                                position?.coords.longitude
                            ],
                            zoom: 15
                        }, {
                            searchControlProvider: 'yandex#search'
                        });
                        // console.warn('Map SDK loaded', this, position, ymaps )
                        this.$overlayContent();
                    });
                })
                    .catch(er => {
                    this.$unloading();
                    setTimeout(() => { this.$loadFailed(); }, 500);
                    console.error('Yandex Map SDK failed', er);
                });
                break;
            case '@bing':
                await SensenPluginAssetsScript.Inject(`http://www.bing.com/api/maps/mapcontrol?callback=SensenPluginMapsCallback&key=${Manifest.api.keys.bingMap}`, true)
                    .then(e => {
                })
                    .catch(er => {
                    this.$unloading();
                    setTimeout(() => { this.$loadFailed(); }, 500);
                    console.error('Bing Map SDK failed', er);
                });
                break;
        }
        return this;
    }
    $overlayContent() {
        this.$unloading();
        this.$title = this.querySelector(`[plugin-child="@title"]`) || document.createElement('div');
        this.$about = this.querySelector(`[plugin-child="@about"]`) || document.createElement('div');
        this.$header = this.querySelector(`[plugin-child="@header"]`) || document.createElement('div');
        this.$headerContent = this.querySelector(`[plugin-child="@headerContent"]`) || document.createElement('div');
        this.$headerControls = this.querySelector(`[plugin-child="@headerControls"]`) || document.createElement('div');
        this.$submitter = this.querySelector(`[plugin-child="@submitter"]`) || document.createElement('div');
        this.$content = this.querySelector(`[plugin-child="@content"]`) || document.createElement('div');
        this.$title?.setAttribute('plugin-child', '@title');
        this.$title?.setAttribute('ui-padding', 'top:3x h:4x');
        this.$title?.setAttribute('ui-text', 'big');
        this.$title?.setAttribute('ui-box', '');
        this.$title?.setAttribute('ui-flex', 'column align-center-v');
        this.$about?.setAttribute('plugin-child', '@about');
        this.$about?.setAttribute('ui-text', 'medium');
        this.$about?.setAttribute('ui-padding', 'bottom:3x h:4x');
        this.$headerControls?.setAttribute('plugin-child', '@headerControls');
        this.$headerControls?.setAttribute('ui-tools', '');
        this.$headerContent?.setAttribute('plugin-child', '@headerContent');
        this.$headerContent?.setAttribute('flex', 'fill');
        this.$submitter?.setAttribute('plugin-child', '@submitter');
        this.$submitter?.setAttribute('ui-padding', 'v:2x h:4x');
        this.$header?.setAttribute('plugin-child', '@header');
        this.$header?.setAttribute('ui-flex', 'row align-center-v');
        this.$content?.setAttribute('plugin-child', '@content');
        this.$content?.setAttribute('ui-flex', 'row');
        this.$content?.setAttribute('flex', 'fill');
        this.$content?.setAttribute('ui-box', 'slide:horizontal');
        this.$title.innerHTML = `${this.$props?.title || ''}`;
        this.$about.innerHTML = `${this.$props?.about || ''}`;
        this.$submitter.innerHTML = `
            <button type="button" ui-button ui-box="one one::hover" ui-rounded="larger" >
                <span ui-hide="sm" button-label >Trouvez un point de vente</span>
                <i button-icon class="fas fa-cart-shopping-fast"></i>
            </button>
        `;
        this.$submitter.onclick = () => {
            const status = this.getAttribute('plugin-status') || '0';
            console.warn('Status Map', status);
            if (status == '0') {
                this.$hideMap();
            }
            else {
                this.$showMap();
            }
        };
        this.$headerControls.appendChild(this.$submitter);
        this.$headerContent.appendChild(this.$title);
        this.$headerContent.appendChild(this.$about);
        this.$header.appendChild(this.$headerContent);
        this.$header.appendChild(this.$headerControls);
        this.$overlay.appendChild(this.$header);
        this.$overlay.appendChild(this.$content);
        if (this.$props && 'content' in this.$props) {
            try {
                const content = JSON.parse(decodeHTMLEntities(this.$props.content || '[]'));
                if (Array.isArray(content)) {
                    content.map((item) => {
                        const i = document.createElement('div');
                        i.setAttribute('ui-rounded', 'medium');
                        i.setAttribute('ui-margin', '2x');
                        i.setAttribute('ui-box', 'layer width-5-min height-4-min');
                        i.innerHTML = `
                            <div ui-box="width-5-max">
                                <div ui-box="clean thumb aspect-square">
                                    <img src="${item.thumb}" >
                                </div>
                            </div>
                            <div ui-padding="h:1x top:2x" ui-text="medium">${item.title}</div>
                            <div ui-padding="h:1x bottom:2x" ui-text="small">${item.about}</div>
                        
                        `;
                        this.$content?.appendChild(i);
                    });
                }
            }
            catch (er) {
                console.error("SensenPluginTenzoMaps", er);
            }
        }
        return this;
    }
    $close() {
        // this.ontransitionend  = ()=>{
        //     this.parentNode?.removeChild(this)
        //     this.$emitter.dispatch('close', [this])
        //     this.$enableHostScrolling();
        //     this.ontransitionend = null
        // }
        // this.setAttribute('plugin:status', '0');
        return this;
    }
    $showMap() {
        this.setAttribute('plugin-status', '0');
        return this;
    }
    $hideMap() {
        this.setAttribute('plugin-status', '1');
        return this;
    }
    static Get(ev) {
        console.warn('Map Loaded');
        // const get  = (document).querySelector(`[plugin\\:id="maps-${ iD }"]`) as SensenPluginMaps
        // if(get){ get.SetContent(); }
    }
    static Open(iD, props) {
        return (new SensenPluginMaps(props)).$open(iD);
    }
    static Close(name, host) {
        const get = (host || document).querySelector(`[plugin\\:id="maps-${name}"]`);
        if (get) {
            get.$close();
        }
        return this;
    }
    static $use() {
        if (!customElements.get(this.$name)) {
            customElements.define(this.$name, this);
        }
        return this;
    }
}
SensenPluginMaps.$name = 'plugin-tenzo-maps';
// window.SensenPluginMapsCallback = (iD: string)=>{
//     SensenPluginMaps.Open(iD)
// }
