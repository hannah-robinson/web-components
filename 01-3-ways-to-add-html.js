class WebComponent extends HTMLElement {
  constructor() {
    super() // calls constructor of the class it is extending, in this case HTMLElement

    // 1. Add HTML to component by:
    // Setting .innerHTML
    // this.innerHTML = `
    // <div>
    //   <span>This is a web component</span>
    // </div>`

    // 2. Creating elements and adding to DOM
    // const div = document.createElement('div')
    // const span = document.createElement('span')
    // span.innerHTML = 'This is a web component'
    // div.appendChild(span)
    // this.appendChild(div)
    // "this" is the web component itself

    //3.  Parse an HTML string
    const html = `<div><span>This is a web component</span></div>`
    const innerHTML = new DOMParser().parseFromString(html, 'text/html').body
      .innerHTML
    this.innerHTML = innerHTML // 'this' is the web component so the 'this.innerHTML is the innerHTML of the instance of the web component when it's used in the HTML doc. The 2nd innerHTML here (= innerHTML) is the const we just created in the line above.
    // There are cases when you need to use this 3rd method: when you are getting html returned from an API. (This is the case in Shopify themes.)
  }
}

customElements.define('web-component', WebComponent) // 1st argument is how it will be named in the HTML document, 2nd is the class name
