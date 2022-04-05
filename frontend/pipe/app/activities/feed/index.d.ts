import { SceneActivity } from "sensen-jutsu/activity";
import { SceneActivityProps } from "sensen-jutsu/index.t";
export interface FeedsActivityProps extends SceneActivityProps {
    message: string;
}
export declare const FeedsActivity: SceneActivity<FeedsActivityProps>;
