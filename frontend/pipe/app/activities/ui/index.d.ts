import { SceneActivity } from "sensen-jutsu/activity";
import { SceneActivityProps } from "sensen-jutsu/index.t";
export interface UiActivityProps extends SceneActivityProps {
    message: string;
}
export declare const UiActivity: SceneActivity<UiActivityProps>;
