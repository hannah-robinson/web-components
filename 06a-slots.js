// Adding named slots
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
    <div>
      <slot name="slot-1"></slot>
    </div>
    <div>
      <slot name="slot-2"></slot>
    </div> 
    `
  }
  disconnectedCallback() {
    console.log('Disconnected callback')
  }
}

customElements.define('web-component', WebComponent)
