
let wrapper = document.createElement('template');
wrapper.innerHTML = `

<div class='wrapper'>
  <div id='main'>
    <ul class='listings'>
      <!--
              style='transform: translate(600px, 792px) rotate(1.0472rad) skewX(0rad) scale(1, 1); display: none;'
              -->
      <li data-type='Mansion' data-desc='This beautiful home in Point Grey is going for well over 2.4 Million. Start saving up for that down payment.' data-img='1.jpg' class='pane1 active listings__pane--one'>
        <div class='item listings__item'>
          <div style='background-image: url(img/1.jpg)' class='img'></div>
          <div class='like' style='opacity: 1;'></div>
          <div class='dislike' style='opacity: 0;'></div>
        </div>
      </li>
    </ul>

    <!--
          <div class='slide modal display'>
              <div class='home display slide__start'>

                  <p><strong>With dilapidated homes going for over 1 million dollars in Vancouver, Canada</strong></p>
                  <p>Can you spot the difference between a shack and a mansion</p>
                  <p><strong>Swipe left for shack and swipe right for Mansion</strong></p>

                  <button class='button button--play'>PLAY</button>
              </div>
              <div class='message slide__message'>
                  <h1></h1>
                  <h2></h2>
                  <p>
                  </p>
                  <button class='button button--next'>NEXT</button>
              </div>  
              <div class='finish slide__finish'>
                  <h2 class='finish__count'></h2>
                  <h2>Play Again or Share on Facebook</h2>
                  <button class='button button--play'>PLAY</button>
                   <div class='fb-share-button' data-href='https://shackormansion.com' data-layout='button' data-size='large' data-mobile-iframe='false'><a class='fb-xfbml-parse-ignore' target='_blank' href='http://www.facebook.com/sharer/sharer.php?u=https://shackormansion.com/'>Share</a></div>
                  
                  <p>Developed by</p>
                  <div class='link'>redbrickreative.com</div>
              </div>
          </div>
          end modal display -->
  </div>
  <!-- end jtinder container -->
</div>
<!-- end padding container -->
`

export class MyWrapper extends HTMLElement {
    constructor() {
      super();
  
  // Stamp the template.
  let shadowRoot = this.attachShadow({mode: 'open'});
  this.shadowRoot.appendChild(document.importNode(wrapper.content, true));
  
    }
  }
  
  window.customElements.define('my-wrapper', MyWrapper);