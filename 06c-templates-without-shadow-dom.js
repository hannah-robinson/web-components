class WebComponent extends HTMLElement {
  constructor() {
    super()

    const template = this.querySelector('template').content.cloneNode(true) // using the parameter true makes this a deep clone
    this.appendChild(template)
  }

  disconnectedCallback() {
    console.log('Disconnected callback')
  }
}

customElements.define('web-component', WebComponent)
