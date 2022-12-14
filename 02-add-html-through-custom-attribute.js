// HTML file forr this would contain:
// <web-component text="This is a web component"></web-component>
// Browser dev tools output would be:
// <web-component text="This is a web component">
//   <div>
//     <span>This is a web component</span>
//   </div>
// </web-component>
class WebComponent extends HTMLElement {
  constructor() {
    super()
    if (this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text')
    }
    this.innerHTML = `
    <div>
      <span>${this.innerTextContent}</span>
    </div>
    `
  }
  // Need to watch the above for changes with lifecycle method
  // Lifecycle method goes outside constructor
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == 'text') {
      this.innerHTML = `
      <div>
        <span>${newValue}</span>
      </div>
      `
    }
  }
  // List attributes to watch
  static get observedAttributes() {
    return ['text']
  }
}

customElements.define('web-component', WebComponent) // 1st argument is how it will be named in the HTML document, 2nd is the class name
