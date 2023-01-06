class QuantityInput extends HTMLElement {
  constructor() {
    super()
    this.cartItems = document.querySelector('cart-items')
    this.changeEvent = new Event('change', { bubbles: true })
    // bubbling registers a change event on the parent web component as well

    this.input = this.querySelector('input')
    this.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', this.onButtonClick.bind(this))
    })
    // We bind 'this' so that 'this' represents the web component and not the event

    this.addEventListener('change', (event) => {
      const input = event.currentTarget.querySelector('input')
      this.cartItems.updateQty(input.dataset.index, input.value)
      // allows us to access data-index="${index}" which cart-items.js inserts into the HTML and is available on the dataset array.
    })
  }

  onButtonClick(event) {
    event.preventDefault()
    const previousValue = this.input.value
    event.target.name == 'plus' ? this.input.stepUp() : this.input.stepDown()
    if (previousValue != this.input.value)
      this.input.dispatchEvent(this.changeEvent)
    // if statement is just an extra check
  }
}

export default QuantityInput
