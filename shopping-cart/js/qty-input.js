class QuantityInput extends HTMLElement {
  constructor() {
    super()

    this.input = this.querySelector('input')
    this.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', this.onButtonClick.bind(this))
    })
    // We bind 'this' so that 'this' represents the web component and not the event
  }

  onButtonClick(event) {
    event.preventDefault()
    const previousValue = this.input.value
    console.log('clicked 1')
    event.target.name == 'plus' ? this.input.stepUp() : this.input.stepDown()
    console.log('clicked 2')
  }
}

export default QuantityInput
