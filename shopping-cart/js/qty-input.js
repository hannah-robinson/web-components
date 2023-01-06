class QuantityInput extends HTMLElement {
  constructor() {
    super()
    this.cartItems = document.querySelector('cart-items')

    this.input = this.querySelector('input')
    this.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', this.onButtonClick.bind(this))
    })
    // We bind 'this' so that 'this' represents the web component and not the event
  }

  onButtonClick(event) {
    event.preventDefault()
    const previousValue = this.input.value
    event.target.name == 'plus' ? this.input.stepUp() : this.input.stepDown()
    this.cartItems.updateQty(this.input.dataset.index, this.input.value)
    // allows us to access data-index="${index}" which cart-items.js inserts into the HTML and is available on the dataset array.
  }
}

export default QuantityInput
