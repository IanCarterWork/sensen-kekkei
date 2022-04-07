

declare type FontIconSection = 'light' | 'solid' | 'duotone' | 'thin' | 'brands';



declare interface Window{

    SENSE_ICON_DEFAULT_PREFIX ?: string;

    SENSE_ICON_DEFAULT_SECTION ?: FontIconSection;
    
}





/** Font Icon - Debut */

declare interface FontIconState{

    prefix?: string;

    section?: FontIconSection;

    name: string;

    size?: string;
    
}

/** Font Icon - Fin */