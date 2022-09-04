class WebComponent extends HTMLElement {
  // Constructor – crreated in memory, but not necessarily attached to DOM yet.
  // Best place for initialisation. Not best place for interacting with DOM
  constructor() {
    super()
    if (this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text')
    }
    this.innerHTML = `
    <div>
      <span>${this.innerTextContent}</span>
    </div>
    `
    console.log('Constructor')
  }
  // Lifecycle methods (go outside constructor)
  // 1. Connected Callback – runs when the element is attached to the DOM
  connectedCallback() {
    console.log('Connected callback')
  }

  // 2. Attribute changed cb – checking if an attribute has changed
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == 'text') {
      this.innerHTML = `
      <div>
        <span>${newValue}</span>
      </div>
      `
    }
  }

  // 3. Disconnected callback – runs when the element is detached fromthe DOM
  // Useful for cleanup
  disconnectedCallback() {
    console.log('Disconnected callback')
  }

  // List attributes to watch
  static get observedAttributes() {
    return ['text']
  }
}

customElements.define('web-component', WebComponent) // 1st argument is how it will be named in the HTML document, 2nd is the class name
