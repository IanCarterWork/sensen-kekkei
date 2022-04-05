export declare type TKitLoadingProps = {
    message?: string;
    duration?: number;
    type?: TKitLoadingType;
    style?: TKitLoadingStyle;
    size?: TKitLoadingSize;
    color?: TKitLoadingColor;
    backcolor?: TKitLoadingColor;
};
export declare type TKitLoadingType = '@fill' | '@default';
export declare type TKitLoadingStyle = '@circle' | '@ellipsis' | '@bars';
export declare type TKitLoadingSize = '@smaller' | '@small' | '@medium' | '@big' | '@bigger';
export declare type TKitLoadingColor = '@one' | '@two' | '@three' | '@four' | '@five' | '@light' | '@dark' | '@black' | '@white' | '@error' | '@warning' | '@success' | '@text' | '@layer';
export declare class KitLoadingElement extends HTMLElement {
    $container: HTMLElement;
    $content: HTMLElement;
    $icon: HTMLElement;
    $label: HTMLElement;
    constructor();
    $show(): this;
    $style(style: TKitLoadingStyle): this;
    $type(type: TKitLoadingType): this;
    $size(size: TKitLoadingSize): this;
    $color(color: TKitLoadingColor): this;
    $backcolor(backcolor: TKitLoadingColor): this;
    $message(message: string): this;
    $hide(): this;
}
export default class KitLoading {
    iD: string;
    props: TKitLoadingProps;
    Element: KitLoadingElement;
    Props: TKitLoadingProps;
    constructor(iD: string, props: TKitLoadingProps);
    Create(): KitLoadingElement;
    static Get(iD: string): KitLoadingElement;
    static Show(iD: string, props: TKitLoadingProps): KitLoading;
    static Hide(iD: string): void;
}
