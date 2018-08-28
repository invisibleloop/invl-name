export class MyComponent {
    render() {
        return (h("div", null,
            "Hello, World! I'm ",
            this.first));
    }
    static get is() { return "invl-name"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        }
    }; }
    static get style() { return "/**style-placeholder:invl-name:**/"; }
}
