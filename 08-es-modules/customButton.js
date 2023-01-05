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

export default CustomButton
