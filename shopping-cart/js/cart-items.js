class CartItems extends HTMLElement {
  constructor() {
    super()
  }

  updateQty(index, value) {
    window.cart.items[index].qty = value
    this.render()
  }
  //  We want to trigger a change event on the quantity. We are using a custom event to pass through the line of the item we want to change and its new quantity to a new method and then that method is going to update cart.items. We could have put it inside the QuantityInput component, but it makes more sense to the instructor to put it in cart-items because it is literally changing cart.items, the object that this component relates to. We aer uisng a cuustsom event because there are two ways to change the quantity value (plus/minus buttons and typing in a new number)

  render() {
    this.innerHTML = '' // To reset old info when cart is rerendered.
    const table_container = document.createElement('div')
    table_container.classList.add('table-container')
    const table = document.createElement('table')
    window.cart.items.forEach((item, index) => {
      const line_price = item.price * item.qty
      // We use the += below to append a table row
      // Input set type to "number" so that nothing else can be input and min to 0 so that we don't get negative numbers
      if (item.qty != 0) {
        table.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td style="text-align:center;">
            <qty-input class="quantity">
              <button class="quantity__button" type="button" name="minus">-</button>
              <input
                type="number"
                value="${item.qty}"
                min="0"
                id="Quantity-${index}"
                data-index="${index}">
              </input>
              <button class="quantity__button" type="button" name="plus">+</button>
            </qty-input>
          </td>
          <td style="text-align:right;">${line_price}</td>
        </tr>
      `
      }
    })
    table_container.appendChild(table)
    this.appendChild(table_container) // 'this' is the web component

    const footer = document.createElement('div')

    const cart_total = window.cart.items.reduce(
      (total, item) => parseInt(total + item.price * item.qty),
      0
    )
    // in a real store that has prices with decimals, you'd need parseFloat.

    if (cart_total != 0) {
      footer.innerHTML = `
      <table class="cart-footer">
        <tr>
          <td>Total:</td>
          <td style="text-align: right;">$${cart_total}</td>
        </tr>
      </table>
      `
      this.appendChild(footer)
    }
  }
  // The render method is outside the constructor function because we don't want it to automatically run when the component is rendered. We want it to render and rerender when we specifically ask it to.
}

export default CartItems
