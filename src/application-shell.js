
import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { SharedStyles }         from './shared-styles.js';

import './my-navigation.js';
import './my-wrapper.js';
import './main.js';


export class ApplicationShell extends PolymerElement {

  static get is() { return 'application-shell'; }

  static get properties() {
    return {

    }
  }

  constructor() {
    super();
  }

  ready() {
    super.ready();
    console.log(this.tagName);
  }

  do(){
    console.log("hello");
  }

  static get template() {
    return html`
  
      <!-- STYLES -->
      ${SharedStyles}
  
      <!-- CUSTOM NAVIGATION HTML ELEMENT -->
      <my-navigation></my-navigation>
  
      <!-- CUSTOM WRAPPER HTML ELEMENT -->
      <my-wrapper></my-wrapper>
  
      <!-- STATUS  -->
      <div id='status'></div>
  
    `;
  }
}
customElements.define('application-shell', ApplicationShell);




/*


      listings:
      { 
         one:       {type: Boolean, readOnly: true,   value: 'This beautiful home in Point Grey is going for well over 2.4 Million. Start saving up for that down payment.'},
         two:       {type: Boolean, readOnly: false,  value: 'This is definitely a shack','img': '2.jpg'},
         three:     {type: Boolean, readOnly: false,  value: 'This a Shack. There is now way Jim Pattison lives here','img': '3.jpg'},
         four:      {type: Boolean, readOnly: true,   value: 'This glamourous shed sold for $1,190,000','img': '6.jpg'},
         five:      {type: Boolean, readOnly: false,  value: 'Just another shack. No mansion here','img': '4.jpg'},
         six:       {type: Boolean, readOnly: true,   value: 'Another beautiful point grey home that closed for over 9 million dollars. Most likely it will be a tear down.','img': '5.jpg'},
         seven:     {type: Boolean, readOnly: true,   value: 'This 3 bedroom home is going for only $4,188,000. What a steal of a deal.','img': '7.jpg'},
         eight:     {type: Boolean, readOnly: false,  value: 'This shack has everything you need!','img': '8.jpg'},
         nine:      {type: Boolean, readOnly: true,   value: 'Beautiful deal for over 1.3 million. BBQ included','img': '9.jpg'},
         ten:       {type: Boolean, readOnly: true,   value: 'Get three bedrooms and a gate for 1.9 million','img': '10.jpg'},
         eleven:    {type: Boolean, readOnly: false,  value: 'Perfect for those outdoor getaways','img': '11.jpg'},
         twelve:    {type: Boolean, readOnly: false,  value: 'This is definitely no rain forest shack','img': '12.jpg'},
         thirteen:  {type: Boolean, readOnly: true,   value: '1.39 million! This home might look  little rusty on the outside but with 5 bedrooms you can\'t beat the price','img': '13.jpg'},
         fourteen:  {type: Boolean, readOnly: true,   value: 'This a steal for a lush green yard','img': '14.jpg'},
         fifteen:   {type: Boolean, readOnly: false,  value: 'This one\'s a little too obvious for a mansion','img': '15.jpg'},
         sixteen:   {type: Boolean, readOnly: true,   value: 'Another east van special, too shacklike','img': '16.jpg'},
         seventeen: {type: Boolean, readOnly: true,   value: 'The keys await your new mansion','img': '17.jpg'},
         eighteen:  {type: Boolean, readOnly: false,  value: 'Great for your next weekend getaway in the woods','img': '18.jpg'},
         nineteen:  {type: Boolean, readOnly: true,   value: 'This fine hastings east estate comes with a massive garden','img': '19.jpg'},
         twenty:    {type: Boolean, readOnly: false,  value: 'Sometimes it can be confusing differentiating a shack from a mansion','img': '20.jpg'},
         twentyone: {type: Boolean, readOnly: true,   value: 'ENDLESS POTENTIAL to build your dream home or update the current one','img': '21.jpg'},
      }


  // DOM FUNCTION
  _DOM() {
    let dom = {}
    dom.start
    dom.finish
    dom.message = document.querySelector('.slide__message')
    dom.like
    dom.dislike
    dom.container = document.querySelector('.listings')
    dom.firstItem = document.querySelector('.listings__pane--one')
    dom.listings = []
    dom.buttonNext = document.querySelector('button--next')
    return dom
  }

  // STATE FUNCTION
  _State() {
    let state = {}
    state.start
    state.message
    state.next
    state.finish
    state.item = 0
    state.correct = 0
    state.currentListings = []
    return state
  }

  // UPDATE FUNCTION
  _Update() {
    const update = {}
    update.onThrowOut = () => {
      DOM.listings[0].remove()
      Render.message(State.currentListings[0].dataset, choice)
      DOM.listings = document.querySelectorAll('listings li')
      DOM.listings[0].className('active')
      DOM.listings[1].className('next')
      Handler(DOM().listings[0], DOM.container)
      State.item++
      State.currentListings
        .splice(0, 1)
        .push(shuffledListings[State.item + 2])
      Render.last
    }
    update.onNext = () => {
      DOM.message.className('')
    }
    return update
  }

  // RENDER FUNCTION
  _Render() {
    let   render = {}
    const position = [ 'active', 'next', 'last' ]
    render.init = (template, parent, currentListings) => {
      currentListings
        .forEach((listing, i) => { 
          parent.append(template(i, listing.image, listing.type, listing.desc, position[i]))
        })
    }
    render.last = (template, parent, currentListings) => {
      let last = currentListings[2]
      parent.append(template(num, last.image, last.type, last.desc, 'last'))
    }
    render.message = (current, choice) => {
      let d = current
      let outcome = (d.type === choice ? 'Correct!' : 'Wrong!')
      let className = (d.type === choice ? 'correct!' : 'error')
      let display = ' display'
      template(d.message, d.type, outcome, className, d.image, display)
    }
    return render
  }

  // TEMPLATE FUNCTION
  _Template() {
    let template = {}
    template.message = (message, type, outcome, className, image, display = '') => {
      return `
        <div class='message slide__message${display}' style='background-image: url(img/${image});'>
          <h1 class=${className}>${outcome}</h1>
          <h2>${type}</h2>
          <p>${message}</p>
          <button class='button button--next'>NEXT</button>
        </div>
      `
    }
    template.list = (i, image, type, desc) => {
      return `
        <li data-type='${type}' data-desc='${desc}' data-img='${image}' class='listings__pane-${i} ${position}'>
          <div class='item'>
            <div style='background-image: url(img/${image})' class='img'></div>
            <div class='like'></div>
            <div class='dislike'></div>
          </div>
        </li>
      `
    }
    return template
  }

  // INIT FUNCTION
  _Init() {
    shuffledListings = Shuffle(listings)
    State.currentListings = shuffledListings.splice(State.item, 3)
    Render.init()
    //Add eventListeners to list items
    //Add eventListeners for Action Buttons
  }

  // CONTROLLER FUNCTION
  _Controller() {
    this.play;
    this.reset;
    this.next;
    this.like;
    this.dislike;
  }

  // SHUFFLE FUNCTION
  _Shuffle(deck) {
    let randomizedDeck = []
    let array = deck.slice()
    while (array.length !== 0) {
      let rIndex = Math.floor(array.length * Math.random())
      randomizedDeck.push(array[rIndex])
      array.splice(rIndex, 1)
    }
    return randomizedDeck
  }


*/