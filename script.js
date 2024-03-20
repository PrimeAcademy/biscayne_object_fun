let myToys = [
  {
    name: 'Wish Bear',
    type: 'Stuffed Animal',
    color: 'Blue'
  },
  {
    name: 'Yo-yo',
    type: 'Game',
    color: 'Gray'
  },
  {
    name: 'Share Bear',
    type: 'Stuffed Animal',
    color: 'Purple'
  },
  {
    name: 'Etch-a-Sketch',
    type: 'Game',
    color: 'Red'
  },
  {
    name: 'Easy Bake Oven',
    type: 'Kitchen Fun',
    color: 'Gray'
  }
]
let yourToys = [
  {
    name: 'Pet Rock',
    type: 'Imaginary/Kinda Sad',
    color: 'Gray'
  }
]

// INPUTS: 
  // 1. toyCollection: A collection of toys to add a new 
  //    toy to: array of objects
  // 2. name: string
  // 3. type: string
  // 4. color: string
// OUTPUTS: none: undefined
// SIDE-EFFECTS:
  // 1. Create a "new toy object" and stuff it into whatever collection
  //    the function received as an argument.
function acquireToy(toyCollection, newName, newType, newColor) {
  // 1. Create a "new toy object," using the arguments that
  //    the function received:
  let newToy = {
    name: newName,
    type: newType,
    color: newColor
  }

  // 2. Stuff the new toy into the toyCollection array.
  toyCollection.push(newToy)
}

acquireToy(yourToys, 'Dinosaur Picnic Set', 'Playset', 'Multi-color')

console.log('yourToys:', yourToys)