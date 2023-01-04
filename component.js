// The shadow DOM is useful for controlling CSS separately for a component, maybe you want it to look the same in different projects
class WebComponent extends HTMLElement {
  constructor() {
    super() // inherits the constructor functions of the class that it's extending

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
    </style> `
    const template = document.querySelector('#template').content.cloneNode(true)
    // true makes it a deep clone
    this.shadowRoot.appendChild(template)
  }
  disconnectedCallback() {
    console.log('Disconnected callback')
  }
}

customElements.define('web-component', WebComponent) // 1st param is the name/what element will look like in the html doc. 2nd param is class name created on line 2 of this doc.
class HelloWorldWebComponent extends HTMLElement {
  constructor() {
    super()
    console.log(this.innerHTML) // will console log what ever is between the HelloWorldWebComponent tags in the HTML doc in each instance
  }
}

customElements.define('hello-component', HelloWorldWebComponent)
