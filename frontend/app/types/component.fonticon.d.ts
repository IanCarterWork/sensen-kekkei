

declare type FontIconStyle = 'light' | 'solid' | 'duotone' | 'thin';



declare interface Window{

    SENSE_ICON_DEFAULT_PREFIX ?: string;

    SENSE_ICON_DEFAULT_STYLE ?: FontIconStyle;
    
}





/** Font Icon - Debut */

declare interface FontIconState{

    prefix?: string;

    style?: FontIconStyle;

    name: string;

    size?: string;
    
}

/** Font Icon - Fin */