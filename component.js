class WebComponent extends HTMLElement {
  constructor() {
    super() // calls constructor of the class it is extending, in this case HTMLElement

    // Add HTML to component by:
    // Setting .innerHTML
    this.innerHTML = `
    <div>
      <span>This is a web component</span>
    </div>`
  }
}

customElements.define('web-component', WebComponent) // 1st argument is how it will be named in the HTML document, 2nd is the class name
