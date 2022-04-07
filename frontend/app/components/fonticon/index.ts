import { Component } from "sensen-jutsu";




window.SENSE_ICON_DEFAULT_PREFIX = window.SENSE_ICON_DEFAULT_PREFIX || 'fa';

window.SENSE_ICON_DEFAULT_STYLE = window.SENSE_ICON_DEFAULT_STYLE || 'light';




export const FontIcon = Component<FontIconState>({

    name: 'icon',

    state: {

        prefix: undefined,
        
        style: undefined,

        name: 'circle',

        size: 'lg',

    },

    render(){

        console.warn('Font Icon', this.state)

        return `<i class="{{ this.$state.prefix || window.SENSE_ICON_DEFAULT_PREFIX }}-{{ this.$state.style || window.SENSE_ICON_DEFAULT_STYLE }} {{ this.$state.prefix || window.SENSE_ICON_DEFAULT_PREFIX }}-{{ this.$state.name }} {{ this.$state.prefix || window.SENSE_ICON_DEFAULT_PREFIX }}-{{ this.$state.size || 'lg' }}"></i>`
        
    }
    
})