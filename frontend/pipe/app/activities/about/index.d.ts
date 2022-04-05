import { SceneActivity } from "sensen-jutsu/activity";
import { SceneActivityProps } from "sensen-jutsu/index.t";
export interface AboutActivityProps extends SceneActivityProps {
    message: string;
}
export declare const AboutActivity: SceneActivity<AboutActivityProps>;
