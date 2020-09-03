var meals = {
  sides: [
    "Mac and cheese",
    "Mashed potatoes",
    "French fries",
    "Spring rolls",
    "Hot wings",
    "Garlic bread",
    "Chef sald",
    "Hush puppies",
    "Fried rice",
    "Coleslaw"
  ],
  mains: [
    "Smoked ribs",
    "Spaghetti",
    "Grilled salmon",
    "Green chile cheeseburgers",
    "Grilled cheese",
    "Enchiladas",
    "Carnitas",
    "Sushi",
    "Drunken noodles",
    "Kung pao chicken",
    "Chicken tikka masala"
  ],
  desserts: [
    "Ice cream",
    "Lemon bars",
    "Apple pie",
    "Mochi",
    "Flan",
    "Canoli",
    "Carrot cake",
    "Cheesecake",
    "Baklava",
    "Macarons"
  ]
}

// var mains = [
//
// ]
//
// var desserts = [
//   "Ice cream",
//   "Lemon bars",
//   "Apple pie",
//   "Mochi",
//   "Flan",
//   "Canoli",
//   "Carrot cake",
//   "Cheesecake",
//   "Baklava",
//   "Macarons"
// ]
//
// var sides = [
//   "Mac and cheese",
//   "Mashed potatoes",
//   "French fries",
//   "Spring rolls",
//   "Hot wings",
//   "Garlic bread",
//   "Chef sald",
//   "Hush puppies",
//   "Fried rice",
//   "Coleslaw"
// ]
var letsCookButton = document.querySelector(".lets-cook-button");
console.log(document.getElementsByName("dish"));

letsCookButton.addEventListener("click", findRadioInput);

function getRandom(list) {
  var index = Math.floor(Math.random() * meals[list].length);
    console.log(meals[list][index]);
}

function findRadioInput() {
  event.preventDefault();
  var dishes = document.getElementsByName("dish");
  for (var i = 0; i < dishes.length; i++) {
    if (dishes[i].checked === true) {
      getRandom(dishes[i].value);
    }
  }
}
