// The shadow DOM is useful for controlling CSS separately for a component, maybe you want it to look the same in different projects
class WebComponent extends HTMLElement {
  constructor() {
    super()

    if (this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text')
    }

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
      <span>${this.innerTextContent}</span>
      <slot></slot>
    </div>
    <button>Trigger special event</buttton>
    `
    // The grey color absove won't have an effect becuse it iis overidden by a style in the light DOM
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == 'text')
      this.shadowRoot.querySelector('span').innerHTML = newValue
  } // This code wasn't clean/DRY in previous commits. Here we've cleaned it up.

  disconnectedCallback() {
    console.log('Disconnected callback')
  }

  static get observedAttributes() {
    return ['text']
  }
}

customElements.define('web-component', WebComponent)
