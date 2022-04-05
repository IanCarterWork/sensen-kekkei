import { SensenEmitter } from "sensen-jutsu/emitter";
export declare type SensenPluginMapsProps = {
    iD?: string;
    title?: string;
    host?: string | HTMLElement;
    type?: 'bing';
};
export declare type SensenPluginMapsHostOverflow = {
    x: string;
    y: string;
};
export default class SensenPluginMaps extends HTMLElement {
    static $name: string;
    $underlay: HTMLElement;
    $overlay: HTMLElement;
    $props?: SensenPluginMapsProps;
    $hostOverflow: SensenPluginMapsHostOverflow;
    $hostComputed: CSSStyleDeclaration;
    $emitter: SensenEmitter;
    constructor(props?: SensenPluginMapsProps);
    connectedCallback(): void;
    adoptedCallback(): void;
    disconnectedCallback(): void;
    $render(): this;
    $captureHostState(): this;
    $disableHostScrolling(): this;
    $enableHostScrolling(): this;
    $initProps(): this;
    $initEmitters(): this;
    $open(): this;
    $close(): this;
    static Open(content: string, props: SensenPluginMapsProps): SensenPluginMaps;
    static Close(name: string, host?: HTMLElement): typeof SensenPluginMaps;
    static $use(): typeof SensenPluginMaps;
}
