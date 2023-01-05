class ProductElement extends HTMLElement {
  constructor() {
    super()

    this.cartItems = document.querySelector('cart-items')

    this.image = this.getAttribute('image')
    this.name = this.getAttribute('name')
    this.id = this.getAttribute('id')
    this.price = this.getAttribute('price')

    this.innerHTML = `
      <div class="image-container">
        <img class="product-image" src="${this.image}">
      </div>
      <h2>${this.name}</h2>
    `
    const btn = document.createElement('button')
    btn.innerHTML = 'Add to cart'
    btn.addEventListener('click', this.addToCart.bind(this)) // bind(this) so that we are referencing the web component not the event
    this.appendChild(btn)
    // We've created and appended this button instead of just adding it to the innerHTML above it, so that we could add the event listener to it first
  }
  addToCart() {
    const itemObj = {
      id: this.id,
      name: this.name,
      qty: 1,
      price: this.price,
    }
    // console.log(itemObj)

    const item_in_cart = window.cart.items.find((item) => item.id == itemObj.id)
    // console.log(item_in_cart)
    if (item_in_cart) {
      item_in_cart.qty++
    } else {
      window.cart.items.push(itemObj)
    }
    this.cartItems.render()
  }
}

export default ProductElement
