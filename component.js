class WebComponent extends HTMLElement {
  constructor() {
    super() // calls constructor of the class it is extending, in this case HTMLElement
    console.log('Hoola!')
  }
}

customElements.define('web-component', WebComponent) // 1st argument is how it will be named in the HTML document, 2nd is the class name
