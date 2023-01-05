class ProductElement extends HTMLElement {
  constructor() {
    super()

    this.image = this.getAttribute('image')

    this.innerHTML = `
      <div class="image-container">
        <img class="product-image" src="${this.image}">
      </div>
    `
  }
}

export default ProductElement
