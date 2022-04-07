





declare type HomeActivityState = SensenElementState & {

    ref?: string;

    welcome: string;

    name: string;
    
    version?: string;

    posts?: IDataStackPost[],

    icon: string;

}