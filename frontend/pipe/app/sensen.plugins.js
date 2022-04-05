import { SensenEmitter } from "sensen-jutsu/emitter";
export default class SensenPluginElement extends HTMLElement {
    constructor(props) {
        super();
        this.$identity = '';
        this.$propsObserver = {};
        this.$contentObserver = {};
        this.$emitter = new SensenEmitter();
        this.$pluginExpression = /^plugin\:/;
        this.$props = props || {};
        this.$watchContent();
    }
    $bewitchment() {
        const children = this.querySelectorAll(`[plug\\:bind="${this.$identity}"]`);
        if (children.length) {
            children.forEach((child) => {
                child.$plugin = this;
            });
        }
        return this;
    }
    $watchContent() {
        this.$contentObserver = new MutationObserver((records) => {
            if (records) {
                this.$emitter.dispatch('contentChange', [records]);
            }
        });
        this.$contentObserver.observe(this, {
            subtree: true,
            childList: true,
            characterData: true,
        });
        return this;
    }
    $render() {
        throw (`SensenPluginElement Error definition : missign "$render" method`);
        return this;
    }
    connectedCallback() { this.$render(); }
    adoptedCallback() { }
    disconnectedCallback() { }
    $setProp(name, value) {
        this.setAttribute(`plugin:${name}`, `${(typeof value == 'object') ? JSON.stringify(value) : value}`);
        return this;
    }
    $watchProps() {
        this.$propsObserver = new MutationObserver((records) => {
            if (records) {
                records.map(record => {
                    if (record.type == 'attributes') {
                        this.$syncProps(record.attributeName || undefined, this.getAttribute(record.attributeName || '') || undefined);
                        this.$emitter.dispatch('propChange', [record]);
                    }
                });
            }
        });
        this.$propsObserver.observe(this, {
            attributes: true
        });
        return this;
    }
    $syncProps(name, value) {
        const k = (name || '').replace(this.$pluginExpression, '');
        if (k && (name || '').match(this.$pluginExpression)) {
            let $value = value;
            try {
                $value = JSON.parse(value || '');
                if (typeof $value != 'object') {
                    $value = value;
                }
            }
            catch (e) {
                $value = value;
            }
            // @ts-ignore
            this.$props[k] = $value;
        }
        return this;
    }
    $initializeProps(props) {
        this.$props = props || this.$props || {};
        Object.values(this.attributes).map(attribute => {
            if (attribute.name.match(this.$pluginExpression)) {
                this.$syncProps(attribute.name, attribute.value);
            }
        });
        this.$watchProps();
        props = this.$props;
        return this;
    }
}
