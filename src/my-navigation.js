
import { LitElement, html }     from '@polymer/lit-element';
import { SharedStyles }         from './shared-styles.js';

export class MyNavigation extends LitElement {
  constructor() {
    super();
  }
 
  _render() {
    return html`
    
      <!-- STYLES -->
      ${SharedStyles}

      <!-- NAVIGATION -->
      <nav class='nav'>

        <!-- HEADER -->
        <div class='nav__logo logo'>
          <span class='logo__shack'>Shack</span><span class='logo__mansion'>or Mansion</span>
        </div>

        <div class='nav__social'>

          <!-- SOCIAL -->
          <div class='fb-share-button button--facebook' data-href='https://shackormansion.com' data-layout='button' data-size='large' data-mobile-iframe='true'>
            <a class='fb-xfbml-parse-ignore' target='_blank' href='http://www.facebook.com/sharer/sharer.php?u=https://shackormansion.com/'>Share</a>
          </div>

        </div>

      </nav>

      `;
    }
  }
  
  window.customElements.define('my-navigation', MyNavigation);