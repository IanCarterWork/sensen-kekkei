export default class SensenPluginFileUpload extends HTMLElement {
    static $name: string;
    input?: HTMLInputElement;
    constructor();
    connectedCallback(): void;
    adoptedCallback(): void;
    disconnectedCallback(): void;
    $render(): this;
    $props(): this;
    $emitters(): this;
    static $use(): typeof SensenPluginFileUpload;
}
