import { Component } from "sensen-jutsu";
window.SENSE_ICON_DEFAULT_PREFIX = window.SENSE_ICON_DEFAULT_PREFIX || 'fa';
window.SENSE_ICON_DEFAULT_SECTION = window.SENSE_ICON_DEFAULT_SECTION || 'light';
export const FontIcon = Component({
    name: 'icon',
    state: {
        prefix: '',
        section: 'light',
        name: 'circle',
        size: 'lg',
    },
    render() {
        return `<i class="{{ this.$state.prefix || window.SENSE_ICON_DEFAULT_PREFIX }}-{{ this.$state.section || window.SENSE_ICON_DEFAULT_SECTION }} {{ this.$state.prefix || window.SENSE_ICON_DEFAULT_PREFIX }}-{{ this.$state.name }} {{ this.$state.prefix || window.SENSE_ICON_DEFAULT_PREFIX }}-{{ this.$state.size || 'lg' }}"></i>`;
    }
});
