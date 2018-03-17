document.addEventListener('DOMContentLoaded', () => {


/**
 * @param {} NULL.
 * @returns {Object} An instance of App object.
 */
const App = () => {
  let app;
  let listings;
  const construct = () => {
    app = {};
    listings = [
      {'type': 'Mansion','desc': 'This beautiful home in Point Grey is going for well over 2.4 Million. Start saving up for that down payment.','img': '1.jpg'},
      {'type': 'Shack','desc': 'This is definitely a shack','img': '2.jpg'},
      {'type': 'Shack','desc': 'This a Shack. There is now way Jim Pattison lives here','img': '3.jpg'},
      {'type': 'Mansion','desc': 'This glamourous shed sold for $1,190,000','img': '6.jpg'},
      {'type': 'Shack','desc': 'Just another shack. No mansion here','img': '4.jpg'},
      {'type': 'Mansion','desc': 'Another beautiful point grey home that closed for over 9 million dollars. Most likely it will be a tear down.','img': '5.jpg'},
      {'type': 'Mansion','desc': 'This 3 bedroom home is going for only $4,188,000. What a steal of a deal.','img': '7.jpg'},
      {'type': 'Shack','desc': 'This shack has everything you need!','img': '8.jpg'},
      {'type': 'Mansion','desc': 'Beautiful deal for over 1.3 million. BBQ included','img': '9.jpg'},
      {'type': 'Mansion','desc': 'Get three bedrooms and a gate for 1.9 million','img': '10.jpg'},
      {'type': 'Shack','desc': 'Perfect for those outdoor getaways','img': '11.jpg'},
      {'type': 'Shack','desc': 'This is definitely no rain forest shack','img': '12.jpg'},
      {'type': 'Mansion','desc': '1.39 million! This home might look a little rusty on the outside but with 5 bedrooms you can\'t beat the price','img': '13.jpg'},
      {'type': 'Mansion','desc': 'This a steal for a lush green yard','img': '14.jpg'},
      {'type': 'Shack','desc': 'This one\'s a little too obvious for a mansion','img': '15.jpg'},
      {'type': 'Mansion','desc': 'Another east van special, too shacklike','img': '16.jpg'},
      {'type': 'Mansion','desc': 'The keys await your new mansion','img': '17.jpg'},
      {'type': 'Shack','desc': 'Great for your next weekend getaway in the woods','img': '18.jpg'},
      {'type': 'Mansion','desc': 'This fine hastings east estate comes with a massive garden','img': '19.jpg'},
      {'type': 'Shack','desc': 'Sometimes it can be confusing differentiating a shack from a mansion','img': '20.jpg'},
      {'type': 'Mansion','desc': 'ENDLESS POTENTIAL to build your dream home or update the current one','img': '21.jpg'}
    ]
  };

  construct();

  const Swing = () => {

  }

  const DOM = () => {
    let dom = {}

    dom.start
    dom.finish
    dom.message
    dom.firstItem = document.querySelector('.listings__pane--one');

    return dom
  }

  const View = () => {

  }

  const Helper = () => {
    this.addListener;
  }

  const Init = () => {

  }

  const Controller = () => {
    this.play;
    this.reset;
    this.next;
    this.like;
    this.dislike;
  }

  const Shuffle = (deck) => {
    let randomizedDeck = []
    let array = deck.slice()
    while (array.length !== 0) {
      let rIndex = Math.floor(array.length * Math.random())
      randomizedDeck.push(array[rIndex])
      array.splice(rIndex, 1)
    }
    return randomizedDeck
  }

  Handler(DOM().firstItem)

}

App();

})

/**
 * @param {String} eventName.
 * @param {Function} functionName.
 * @returns {Object} An instance of the Event Emmitter object.
 */
const EventEmitter = () => {
  const obj = {}

  obj.events = {}

  obj.on = (eventName, fn) => {
    obj.events[eventName] = obj.events[eventName] || []
    obj.events[eventName].push(fn)
  }

  obj.off = (eventName, fn) => {
    if (obj.events[eventName]) {
      for (var i = 0; i < obj.events[eventName].length; i++) {
        if (obj.events[eventName][i] === fn) {
          obj.events[eventName].splice(i, 1)
          break
        }
      }
    }
  }

  obj.emit = (eventName, fn) => {
    if (obj.events[eventName]) {
      obj.events[eventName].forEach((fn) => { fn(data) })
    }
  }

  return obj
}

/**
 * @param {DOM} takes the current pane.
 * @param {DOM} context.
 * @returns {} NULL.
 */
const Handler = (item, context) => {

  let clicked = {}
  let moving = false
  let ctx = document.querySelector('.listings')
  let cx, cy, ctxBoundary
  let x, y, boundary
  let direction, itemPosition
  let clientHeight

  // Mouse events
  item.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onUp);

  // Touch events 
  item.addEventListener('touchstart', onTouchDown);
  document.addEventListener('touchmove', onTouchMove);
  document.addEventListener('touchend', onTouchEnd);

  function onTouchDown(e) {
    onDown(e.touches[0]);
    e.preventDefault();
  }

  function onTouchMove(e) {
    onMove(e.touches[0]);
  }

  function onTouchEnd(e) {
    if (e.touches.length ==0) onUp(e.changedTouches[0]);
  }

  function onMouseDown(e) {
    onDown(e);
    e.preventDefault();
  }

  function onDown(e) {
    //Get x,y coordinates of pointer related to square
    calc(e);

    moving = true;

    clicked = {
      x: x,
      y: y,
      cx: cx,
      cy: cy,
      //isMoving: !isResizing && canMove(),
    };
  }

  /**
   * @param {number} fromX
   * @returns {string} computed direction
   */
  const computeDirection = (position) => {
    return position < 0 ? 'Left' : 'Right'
  }

  function onMove(e) {
    if(moving === true) {
      // moving
      itemPosition = e.clientX - clicked.x - clicked.cx
      item.style.top = (e.clientY - clicked.y - clicked.cy) + 'px'
      item.style.left = itemPosition + 'px'
      item.style.transform = 'rotate(' + itemPosition/80 + 'deg)'
      direction = computeDirection(itemPosition)
      console.log(direction)
    }
  }

  function onUp(e) {
    moving = false;
    if(itemPosition < -150 || itemPosition > 150) {
      throwOut(e, direction)
    } else {
      throwIn(e)
    }
  }

  function throwIn(e) {
    item.style.top = '0'
    item.style.left = '0'
    item.style.transform = 'rotate(0deg)'
    item.style.transition = 'all 150ms ease'
  }

  function throwOut(e, direction) {
    clientHeight = document.body.clientHeight
    clientHeight = clientHeight + 100 + 'px'
    console.log(clientHeight)
    if (direction === 'Left') {
      //rotate(-60deg)
      item.style.transform = 'translate(-400px, ' + clientHeight + ') rotate(-60deg)'
      item.style.transition = 'transform 500ms ease-in-out'
    } else {
      item.style.transform = 'translate(400px, ' + clientHeight + ') rotate(60deg)'
      item.style.transition = 'transform 500ms ease-in-out'
    }
  }

  function calc(e) {
    boundary = item.getBoundingClientRect()
    ctxBoundary = ctx.getBoundingClientRect()
    cy = ctxBoundary.top
    cx = ctxBoundary.left
    x = (e.clientX - cx) - (boundary.left - cx)
    y = (e.clientY - cy) - (boundary.top - cy)
  }

}
/**
 * @param {Array} takes an array of listings.
 * @returns {Array} A shuffled array of listing.
 */

/*
document.addEventListener('DOMContentLoaded', () => {
  app.addEventListener('click', (e) => {
    let item = e.target
  })
})

 /**
 * @param {Object} config Stack configuration.
 * @returns {Object} An instance of Stack object.
 */



 /**
 * @param {Object} config Stack configuration.
 * @returns {Object} An instance of Stack object.
 */