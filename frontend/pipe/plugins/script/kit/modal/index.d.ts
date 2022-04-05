import SensenPluginElement, { SensenPluginElementProps } from "@App/sensen.plugins";
export declare type SensenPluginModalProps = SensenPluginElementProps & {
    iD?: string;
    title?: string;
    locked?: boolean;
    host?: HTMLElement;
};
export declare type SensenPluginModalHostOverflow = {
    x: string;
    y: string;
};
export default class SensenPluginModal extends SensenPluginElement<SensenPluginModalProps> {
    static $name: string;
    $identity: string;
    $underlay: HTMLElement;
    $overlay: HTMLElement;
    $hostOverflow: SensenPluginModalHostOverflow;
    $hostComputed: CSSStyleDeclaration;
    constructor(props?: SensenPluginModalProps);
    $render(): this;
    $captureHostState(): this;
    $disableHostScrolling(): this;
    $enableHostScrolling(): this;
    $initProps(): this;
    $initEmitters(): this;
    SetContent(content?: string): this;
    $open(content?: string): this;
    $close(): this;
    static Open(content: string, props: SensenPluginModalProps): SensenPluginModal;
    static Close(name: string, host?: HTMLElement): typeof SensenPluginModal;
    static $use(): typeof SensenPluginModal;
}
export declare class ModalNavigation {
    static Start(): void;
    static Stop(): void;
}
