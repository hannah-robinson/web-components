class WebComponent extends HTMLElement {
  constructor() {
    super()
    if (this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text')
    }
    this.innerHTML = `
    <div>
      <span>${this.innerTextContent}</span>
    </div>
    <button>Trigger special event</buttton>
    `
  }

  connectedCallback() {
    this.querySelector('button')
      .addEventListener('click', this.triggerSpecialEvent)
      .bind(this)
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == 'text') {
      this.innerHTML = `
      <div>
        <span>${newValue}</span>
        <button>Trigger special event</buttton>
      </div>
      `
    }
  }

  static get observedAttributes() {
    return ['text']
  }

  triggerSpecialEvent() {
    const specialEvent = new Event('special')
    this.dispatchEvent(specialEvent)
  }
}

customElements.define('web-component', WebComponent)
