export default class SensenPluginFileUpload extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.$render();
    }
    adoptedCallback() {
    }
    disconnectedCallback() {
    }
    $render() {
        this.input = this.querySelector(`input[type="file"]`);
        if (!this.input) {
            this.input = document.createElement('input');
            this.input.setAttribute('type', 'file');
            this.appendChild(this.input);
            this.input.style.width = `1px`;
            this.input.style.height = `1px`;
            this.input.style.opacity = `0.0`;
        }
        return this.$props().$emitters();
    }
    $props() {
        const rex = /^plugin\:/;
        if (this.input) {
            Object.values(this.attributes).map(attribute => {
                if (attribute.name.match(rex)) {
                    const name = attribute.name.replace(rex, '');
                    this.input?.setAttribute(name, attribute.value);
                }
            });
        }
        return this;
    }
    $emitters() {
        this.onclick = () => {
            if (this.input) {
                this.input.click();
            }
        };
        return this;
    }
    static $use() {
        if (!customElements.get(this.$name)) {
            customElements.define(this.$name, this);
        }
        return this;
    }
}
SensenPluginFileUpload.$name = 'plugin-file-upload';
