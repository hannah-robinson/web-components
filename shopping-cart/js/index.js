import ProductElement from './product.js'
import CartItems from './cart-items.js'
import QuantityInput from './qty-input.js'

window.cart = {
  items: [],
}

customElements.define('product-element', ProductElement) // If you add this line first, VSCode will automatically add the import above
customElements.define('cart-items', CartItems)
customElements.define('qty-input', QuantityInput)
