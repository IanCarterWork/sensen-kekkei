





declare type HomeActivityState = SensenElementState & {

    ref?: string;

    welcome: string;

    name: string;

    posts?: IDataStackPost[],

    icon: string;

}