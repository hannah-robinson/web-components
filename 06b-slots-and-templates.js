class WebComponent extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot.innerHTML = `
    <style>
      :host {
        font-weight: bold;
      }
      span {
        color: green;
      }
      ::slotted(span) {
        color: grey; 
      }
    </style>
    `

    // const template = document.querySelector('#template').content.cloneNode(true) // using the parameter true makes this a deep clone
    // Use the one above if your template is inside the web-component tags and the one below if it's inside them.
    const template = this.querySelector('template').content.cloneNode(true) // using the parameter true makes this a deep clone
    this.shadowRoot.appendChild(template)
  }

  disconnectedCallback() {
    console.log('Disconnected callback')
  }
}

customElements.define('web-component', WebComponent)
