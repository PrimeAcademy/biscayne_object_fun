// SECTION NUMBER 1 ------------------------------//
  // My Dummy Data / Test Data:
let myCart = [
  {
    price: 500,
    thing: 'Guitar'
  },
  {
    price: 20,
    thing: 'Lunch',
  },
  {
    price: 1.99,
    thing: 'Motorcycle'
  }
]

let yourCart = [
  {
    price: 100,
    thing: 'Sock'
  },
  {
    price: 2000,
    thing: 'Cat'
  }
]

// SECTION NUMBER 2 ------------------------------//
  // The Function We're Building:
// INPUTS: A shopping cart: array of objects
//         Each object looks like: { price: NUMBER, thing: STRING }
// OUTPUTS: A single item from the cart: object
// SIDE-EFFECTS: none!
function getCheapestItem(shoppingCart) {
  let cheapestItem;

  // Look at each item in the cart!
  for (let anItem of shoppingCart) {
    // If we don't have a cheapest item, set cheapestItem to
    // the value we are looking at:
    if (cheapestItem === undefined) {
      cheapestItem = anItem;
    } else if (anItem.price < cheapestItem.price) {
      // If the price is less than the price of the
      // current cheapestItem, set the value of cheapestItem
      // to the current value we're looking at.
      cheapestItem = anItem;
    }
  }

  return cheapestItem;
}

// SECTION NUMBER 3 ------------------------------//
  // Testing the Function with Our Dummy Data:
let testResultOne = getCheapestItem(myCart)
console.log('Should be $1.99 Motorcycle:', testResultOne)

let testResultTwo = getCheapestItem(yourCart)
console.log('Should be $100 Sock:', testResultTwo)
