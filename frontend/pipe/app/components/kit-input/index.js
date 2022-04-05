import Sensen, { SensenHTMLElement } from "sensen-jutsu";
const KitInput = new Sensen.Component({
    name: 'kit-input',
    template: true,
    emit: {},
    props: {
        icon: `circle-dash`,
        label: `Undefined`,
        cleaner: false,
        secureText: false,
        name: '',
        type: 'text',
        value: '',
    },
    state: {},
    methods: {
        leaved({ self, event }) {
            alert('leaved input');
            if (self.$options.element instanceof SensenHTMLElement) {
                const field = self.$options.element.querySelector(`[ui-textinput]`);
                const input = self.$options.element.querySelector(`[input-field]`);
                if (input && field) {
                    const value = (input.value || '').trim();
                    console.log('No Input', value, value.length);
                    if (value.length) {
                        field.setAttribute('input-filled', 'true');
                    }
                    else {
                        field.removeAttribute('input-filled');
                    }
                }
                else {
                    console.error('No Input', input, 'found in', self.$options.element);
                }
            }
        },
        cleaner({ self, event }) {
            console.log('Cleaner', self);
            if (self.$options.element instanceof SensenHTMLElement) {
                const input = self.$options.element.querySelector(`[input-field]`);
                if (input) {
                    input.value = '';
                }
            }
        }
    },
    appearance: {
    // $self:[
    //     {
    //         backgroundColor:'red'
    //     }
    // ]
    },
});
export default KitInput;
