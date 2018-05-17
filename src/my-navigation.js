let nav = document.createElement('template');
nav.innerHTML = `

<nav class='nav'>
  <div class='nav__logo logo'>
    <span class='logo__shack'>Shack</span><span class='logo__mansion'>or Mansion</span>
  </div>

  <div class='nav__social'>

    <div class='fb-share-button button--facebook' data-href='https://shackormansion.com' data-layout='button' data-size='large' data-mobile-iframe='true'>
      <a class='fb-xfbml-parse-ignore' target='_blank' href='http://www.facebook.com/sharer/sharer.php?u=https://shackormansion.com/'>Share</a>
    </div>

  </div>
</nav>

`

export class MyNavigation extends HTMLElement {
    constructor() {
      super();
  
  // Stamp the template.
  let shadowRoot = this.attachShadow({mode: 'open'});
  this.shadowRoot.appendChild(document.importNode(nav.content, true));
  
    }
  }
  
  window.customElements.define('my-navigation', MyNavigation);