/**
 * @param {Object} config Stack configuration.
 * @returns {Object} An instance of Stack object.
 */
const App = (config) => {
  let app;
  //let eventEmitter;
  //let stack;
  //let init;
  let list;

  const construct = () => {
    app = {};
    //eventEmitter = Sister();
    list = [
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
}
  
console.log(list);

document.addEventListener('DOMContentLoaded', () => {
  app.addEventListener('click', (e) => {
    let item = e.target;
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