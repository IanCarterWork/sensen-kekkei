


declare interface IDataStackCategory{

    id: number;

    title: string;

    about: string;

    thumb?: string;
    
    parent?: number[],

    created: string;

    updated?: string;

}


declare type IDataStackPostMediaType = '-image' | '-video' | '-sound' | '-document';


declare interface IDataStackPost{

    id: number;

    title: string;

    about: string;

    content: string;

    thumb?: string;

    mediaType?: IDataStackPostMediaType;

    mediaURL?: string;
    
    categories?: number[],

    created: string;

    updated?: string;

    avail: boolean;

    colorone?: string;

    colortwo?: string;

}
