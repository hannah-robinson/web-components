// The shadow DOM is useful for controlling CSS separately for a component, maybe you want it to look the same in different projects. The CSS for the light DOM is separate from the CSS in the shadow DOM.
class WebComponent extends HTMLElement {
  constructor() {
    super()

    if (this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text')
    }

    this.attachShadow({ mode: 'open' })

    this.shadowRoot.innerHTML = `
    <style>
     /* This CSS is for the shadow DOM */
      :host {
        font-weight: bold;
      }
      span {
        color: green;
        background-color: var(--bg-color);
      }
      /* slotted pseudo class need a parameter in this case it's 'span' */
      ::slotted(span) {
        color: grey; 
      }
    </style>
    <div>
      <span>${this.innerTextContent}</span>
      <slot></slot> <!-- Slotted content is not considered part of the shadow DOM so light DOM styles apply here -->
    </div>
    `
    // The grey color above won't have an effect on the slotted content because it is overidden by a style in the light DOM
    // Light DOM CSS has no effect on shadow DOM content. Note that while the slotted span is red, the shadow DOM span remains green. (Exception: Loght DOM CSS Varibles are accessible inside the Shadow DOM CSS.)
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
