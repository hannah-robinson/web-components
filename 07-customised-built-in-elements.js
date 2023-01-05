// Customised built-in elements extend specific HTML elements rather than extending the root HTMLElement

class CustomButton extends HTMLButtonElement {
  constructor() {
    super()
    if (this.hasAttribute('link')) {
      this.link = this.getAttribute('link')
      this.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.href = this.link
      })
    }
  }
}

customElements.define('custom-button', CustomButton, { extends: 'button' })
// Customised built-in elements require a 3rd argument which is a js object with the property key 'extends' and the value of the HTML element being extended e.g.
// class CustomButton extends HTMLButtonElement {
// }
// customElements.define('custom-button', CustomButton, { extends: 'button'})
// class CustomLink extends HTMLLinkElement {
// }
// customElements.define('custom-link', CustomLink, { extends: 'a'})
// VSCode autocomplete will help with the 'HTMLButtonElement' / 'HTMLLinkElement' bits
