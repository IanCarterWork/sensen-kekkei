/**
 * Sensen Wireframe Header
 */
export class WireframeHeaderElement extends HTMLElement {
}
/**
 * Sensen Wireframe Body
 */
export class WireframeBodyElement extends HTMLElement {
}
/**
 * Sensen Wireframe Menu
 */
export class WireframeMenuElement extends HTMLElement {
}
class SensenWireframe {
    static make(name, construct) {
        const tag = `wireframe-${name}`;
        if (!customElements.get(tag)) {
            customElements.define(tag, construct);
        }
        return this;
    }
    static $using(config) {
        this
            .make('header', WireframeHeaderElement)
            .make('body', WireframeBodyElement)
            .make('menu', WireframeMenuElement);
        return new this();
    }
}
export default SensenWireframe;
