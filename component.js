class WebComponent extends HTMLElement {
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
  }

  // Lifecycle method goes outside constructor
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == 'text') {
      this.innerHTML = `
      <div>
        <span>${newValue}</span>
      </div>
      `
    }
  }
  // List attributes to watch
  static get observedAttributes() {
    return ['text']
  }
}

customElements.define('web-component', WebComponent) // 1st argument is how it will be named in the HTML document, 2nd is the class name
