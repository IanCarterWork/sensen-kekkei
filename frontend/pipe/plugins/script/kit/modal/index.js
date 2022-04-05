import SensenPluginElement from "@App/sensen.plugins";
export default class SensenPluginModal extends SensenPluginElement {
    constructor(props) {
        super(props);
        this.$identity = '@kit-modal';
        this.$hostOverflow = {};
        this.$hostComputed = {};
        this.$props = props || {};
        this.$props.host = this.$props?.host || document.body;
        this.$underlay = document.createElement('div');
        this.$overlay = document.createElement('div');
        this.$underlay.setAttribute(`plugin-child`, '@underlay');
        this.$overlay.setAttribute(`plugin-child`, '@overlay');
        this.appendChild(this.$underlay);
        this.appendChild(this.$overlay);
    }
    $render() {
        return this.$initProps().$initEmitters();
    }
    $captureHostState() {
        this.$hostComputed = getComputedStyle(this.$props?.host || document.body);
        this.$hostOverflow = {
            x: this.$hostComputed.overflowX,
            y: this.$hostComputed.overflowY,
        };
        return this;
    }
    $disableHostScrolling() {
        if (this.$props?.host) {
            this.$props.host.style.overflowX = 'none';
            this.$props.host.style.overflowY = 'none';
        }
        return this;
    }
    $enableHostScrolling() {
        if (this.$props?.host) {
            this.$props.host.style.overflowX = `${this.$hostOverflow.x}`;
            this.$props.host.style.overflowY = `${this.$hostOverflow.y}`;
        }
        return this;
    }
    $initProps() {
        // const rex = /^plugin\:/
        // if(this){
        //     Object.values(this.attributes).map(attribute=>{
        //         if(attribute.name.match(rex)){
        //             const name = attribute.name.replace(rex, '')
        //             this?.setAttribute(name, attribute.value)
        //         }
        //     })
        // }
        return this;
    }
    $initEmitters() {
        this.$emitter.listen('contentChange', ({ emit: records, type }) => {
            this.$bewitchment();
        });
        if (this.$underlay) {
            if (!this.$props?.locked) {
                this.$underlay.onclick = () => {
                    this.$close();
                };
            }
        }
        return this;
    }
    SetContent(content) {
        this.$overlay.innerHTML = content || '';
        return this;
    }
    $open(content) {
        this.$captureHostState().$disableHostScrolling();
        this.setAttribute('plugin:id', `modal-${this.$props?.iD || 'undefined'}`);
        this.$emitter.listen('open', (e) => {
            // console.warn('Build Content Now', e)
            this.SetContent(content);
        });
        this.ontransitionend = () => {
            this.$emitter.dispatch('open', [this]);
            this.ontransitionend = null;
        };
        this.setAttribute('ui-fx', 'transition');
        this.setAttribute('fx-global', '');
        this.$props?.host?.appendChild(this);
        setTimeout(() => {
            this.setAttribute('plugin:status', '1');
        }, 60);
        return this;
    }
    $close() {
        this.ontransitionend = () => {
            this.parentNode?.removeChild(this);
            this.$emitter.dispatch('close', [this]);
            this.$enableHostScrolling();
            this.ontransitionend = null;
        };
        this.setAttribute('plugin:status', '0');
        return this;
    }
    static Open(content, props) {
        return (new SensenPluginModal(props)).$open(content);
    }
    static Close(name, host) {
        const get = (host || document).querySelector(`[plugin\\:id="modal-${name}"]`);
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
SensenPluginModal.$name = 'plugin-modal';
export class ModalNavigation {
    static Start() {
    }
    static Stop() {
    }
}
