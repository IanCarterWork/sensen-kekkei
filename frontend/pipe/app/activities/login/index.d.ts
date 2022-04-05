import { SceneActivity } from "sensen-jutsu/activity";
import { SceneActivityProps } from "sensen-jutsu/index.t";
export interface LoginActivityProps extends SceneActivityProps {
    welcome: string;
}
export declare const LoginActivity: SceneActivity<LoginActivityProps>;
