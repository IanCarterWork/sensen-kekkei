import { SceneActivity } from "sensen-jutsu/activity";
import { SceneActivityProps } from "sensen-jutsu/index.t";
export interface SubscribeActivityProps extends SceneActivityProps {
    welcome: string;
}
export declare const SubscribeActivity: SceneActivity<SubscribeActivityProps>;
