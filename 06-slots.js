// The shadow DOM is useful for controlling CSS separately for a component, maybe you want it to look the same in different projects
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
    </div>    `
  }
  disconnectedCallback() {
    console.log('Disconnected callback')
  }
}

customElements.define('web-component', WebComponent)
