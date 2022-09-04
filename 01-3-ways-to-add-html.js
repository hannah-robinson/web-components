class WebComponent extends HTMLElement {
  constructor() {
    super() // calls constructor of the class it is extending, in this case HTMLElement

    // Add HTML to component by:
    // Setting .innerHTML
    // this.innerHTML = `
    // <div>
    //   <span>This is a web component</span>
    // </div>`

    // Creating elements and adding to DOM
    // const div = document.createElement('div')
    // const span = document.createElement('span')
    // span.innerHTML = 'This is a web component'
    // div.appendChild(span)
    // this.appendChild(div)
    // "this" is the web component itself

    // Parse an HTML string
    const html = `<div><span>This is a web component</span></div>`
    const innerHTML = new DOMParser().parseFromString(html, 'text/html').body
      .innerHTML
    this.innerHTML = innerHTML
  }
}

customElements.define('web-component', WebComponent) // 1st argument is how it will be named in the HTML document, 2nd is the class name
