export class KitLoadingElement extends HTMLElement {
    constructor() {
        super();
        this.$container = document.createElement('div');
        this.$content = document.createElement('div');
        this.$icon = document.createElement('div');
        this.$label = document.createElement('div');
        this.$container.setAttribute('plugin-child', '@container');
        this.$content.setAttribute('plugin-child', '@content');
        this.$icon.setAttribute('plugin-child', '@icon');
        this.$label.setAttribute('plugin-child', '@label');
        this.setAttribute('ui-fx', 'transition');
        this.setAttribute('fx-global', '');
        this.$content.appendChild(this.$icon);
        this.$container.appendChild(this.$content);
        this.$container.appendChild(this.$label);
        this.appendChild(this.$container);
    }
    $show() {
        if (!this.parentNode) {
            document.body.appendChild(this);
        }
        setTimeout(() => {
            this.setAttribute('plugin-status', '1');
        }, 100);
        return this;
    }
    $style(style) {
        this.setAttribute('plugin-style', style || '@circle');
        return this;
    }
    $type(type) {
        this.setAttribute('plugin-type', type || '@default');
        return this;
    }
    $size(size) {
        this.setAttribute('plugin-size', size || '@medium');
        return this;
    }
    $color(color) {
        this.setAttribute('plugin-color', color || '@text');
        return this;
    }
    $backcolor(backcolor) {
        this.setAttribute('plugin-backcolor', backcolor || '@layer');
        return this;
    }
    $message(message) {
        this.$label.innerHTML = message;
        return this;
    }
    $hide() {
        this.addEventListener('transitionend', () => {
            this.parentNode?.removeChild(this);
        });
        this.setAttribute('plugin-status', '0');
        return this;
    }
}
if (!customElements.get('kit-loading')) {
    customElements.define('kit-loading', KitLoadingElement);
}
export default class KitLoading {
    constructor(iD, props) {
        this.iD = iD;
        this.props = props;
        this.Props = props;
        this.Element = this.Create();
        props.style = props.style || '@circle';
        props.type = props.type || '@default';
        props.size = props.size || '@medium';
        props.color = props.color || '@text';
        props.backcolor = props.backcolor || '@layer';
        props.message = props.message || '';
        this.Element.$style(props.style);
        this.Element.$type(props.type);
        this.Element.$size(props.size);
        this.Element.$color(props.color);
        this.Element.$backcolor(props.backcolor);
        this.Element.$message(props.message);
    }
    Create() {
        const get = document.querySelector(`kit-loading[plugin-id="${this.iD}"]`);
        if (get instanceof HTMLElement) {
            return get;
        }
        else {
            const element = new KitLoadingElement();
            element.setAttribute('plugin-id', this.iD);
            return element;
        }
    }
    static Get(iD) {
        return document.querySelector(`kit-loading[plugin-id="${iD}"]`);
    }
    static Show(iD, props) {
        const instance = new KitLoading(iD, props);
        instance.Element.$show();
        return instance;
    }
    static Hide(iD) {
        const get = this.Get(iD);
        if (get) {
            get.$hide();
        }
    }
}
