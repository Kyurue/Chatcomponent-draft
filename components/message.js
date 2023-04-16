class Message extends HTMLElement {

    //start shadowroot <- is this necessary?
    shadowRoot;
    templateId = 'chat-message-tpl';
    elementId = 'chat-message';

    //initialize component (constructor)
    constructor(message) {
        super();
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.state = {
            message: message,
        };
        this.applyTemplate();
        this.attachStyling();
        this.setState('message', message);
    }

    connectedCallback() {
        console.log('message: connected to DOM');
    }

    disconnectedCallback(){
        console.log('message: disconnected from DOM');
    }

    applyTemplate() {
        let template = document.getElementById(this.templateId);
        let clone = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    attachStyling(){
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "stylesheets/components/message.css");
        this.shadowRoot.appendChild(linkElem);
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    setState(key, value) {
        this.state[key] = value;
        this.updateBinding(key);
    }

    updateBinding(prop) {
        let bindings = this.shadowRoot.querySelectorAll(`[data-bind$="${prop}"]`);
        bindings.forEach(node => {
            node.textContent = this.state[prop];
        })
    }
}

//define and export component
customElements.define('chat-message', Message);
export {Message};
