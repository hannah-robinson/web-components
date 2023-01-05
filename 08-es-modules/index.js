import CustomButton from './customButton.js'
import CustomLink from './customLink.js'

customElements.define('custom-button', CustomButton, { extends: 'button' })
customElements.define('custom-link', CustomLink, { extends: 'a' })
