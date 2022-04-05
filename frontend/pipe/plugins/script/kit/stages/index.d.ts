import SensenPluginElement, { SensenPluginElementProps } from "@App/sensen.plugins";
export declare type SensenPluginStagesStore = {
    [iD: string]: SensenPluginStage;
};
export declare type SensenPluginStagesElements = NodeListOf<SensenPluginStage>;
export declare type SensenPluginStagesProps = SensenPluginElementProps & {
    default: string;
};
export declare type SensenPluginStagesProp = SensenPluginElementProps & {
    name: string;
    range: number;
};
export default class SensenPluginStages extends SensenPluginElement<SensenPluginStagesProps> {
    static $name: string;
    $identity: string;
    $stagesElements: SensenPluginStagesElements;
    $stages: SensenPluginStagesStore;
    $stage?: SensenPluginStage;
    constructor(props?: SensenPluginStagesProps);
    $render(): this;
    $initializeEmitters(): this;
    $recolts(): this;
    $run(): this;
    $go(name: string): this;
    $next(): this;
    $previous(): this;
    static $use(): typeof SensenPluginStages;
}
export declare class SensenPluginStage extends SensenPluginElement<SensenPluginStagesProp> {
    static $name: string;
    constructor(props?: SensenPluginStagesProp);
    $show(): this;
    $hide(): this;
    $render(): this;
    $initEmitters(): this;
    $next(): this;
    $previous(): this;
    $go(name: string): this;
    static $use(): typeof SensenPluginStage;
}
