import { SensenEmitter } from "sensen-jutsu/emitter";
export declare type SensenPluginElementProps = {
    status?: number;
};
export default class SensenPluginElement<Props extends SensenPluginElementProps> extends HTMLElement implements ISensenPluginElement<Props> {
    $plugin?: SensenPluginElement<Props>;
    $identity: string;
    $props?: Props;
    $propsObserver: MutationObserver;
    $contentObserver: MutationObserver;
    $emitter: SensenEmitter;
    $pluginExpression: RegExp;
    constructor(props?: Props);
    $bewitchment(): this;
    $watchContent(): this;
    $render(): this;
    connectedCallback(): void;
    adoptedCallback(): void;
    disconnectedCallback(): void;
    $setProp<T extends keyof Props>(name: keyof Props, value: Props[T]): this;
    $watchProps(): this;
    $syncProps(name?: string, value?: any): this;
    $initializeProps(props?: Props): this;
}
