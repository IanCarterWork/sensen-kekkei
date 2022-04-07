


declare interface IDataStackCategory{

    id: number;

    title: string;

    about: string;

    thumb?: string;
    
    parent?: number[],

    created: string;

    updated?: string;

}


declare interface IDataStackPost{

    id: number;

    title: string;

    about: string;

    content: string;

    thumb?: string;

    mediaType?: '-image' | '-video' | '-sound' | '-document';

    mediaURL?: string;
    
    categories?: number[],

    created: string;

    updated?: string;

    avail: boolean;

}
