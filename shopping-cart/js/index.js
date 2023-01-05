import ProductElement from './product.js'
import CartItems from './cart-items.js'

window.cart = {
  items: [],
}

customElements.define('product-element', ProductElement)
customElements.define('cart-items', CartItems)
