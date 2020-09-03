var meals = {
  sides: [
    "Mac and Cheese",
    "Mashed Potatoes",
    "French Fries",
    "Spring Rolls",
    "Hot Wings",
    "Garlic Bread",
    "Chef Salad",
    "Hush Puppies",
    "Fried Rice",
    "Coleslaw"
  ],
  mains: [
    "Smoked Ribs",
    "Spaghetti",
    "Grilled Salmon",
    "Green Chile Cheeseburgers",
    "Grilled Cheese",
    "Enchiladas",
    "Carnitas",
    "Sushi",
    "Drunken Noodles",
    "Kung Pao Chicken",
    "Chicken Tikka Masala"
  ],
  desserts: [
    "Ice Cream",
    "Lemon Bars",
    "Apple Pie",
    "Mochi",
    "Flan",
    "Canoli",
    "Carrot Cake",
    "Cheesecake",
    "Baklava",
    "Macarons"
  ]
}

var output = document.querySelector(".output");
var letsCookButton = document.querySelector(".lets-cook-button");
var cookPot = document.querySelector("#pot");
var youShouldMake = document.querySelector(".you-should-make");

letsCookButton.addEventListener("click", findRadioInput);

function insertText(text) {
  output.innerText = text;
}

function getRandom(list) {
  var index = Math.floor(Math.random() * meals[list].length);
  var text = `${meals[list][index]}!`;
  insertText(text);
}

function changeView() {
  cookPot.classList.add("hidden");
  youShouldMake.classList.remove("hidden");
}

function randomEntireMeal() {
  var sideDish = meals.sides[Math.floor(Math.random() * meals["sides"].length)];
  var mainDish = meals.mains[Math.floor(Math.random() * meals["mains"].length)];
  var dessertDish = meals.desserts[Math.floor(Math.random() * meals["desserts"].length)];
  var text = `${mainDish} with a side of ${sideDish} and ${dessertDish} for dessert!`
  insertText(text);
}

function findRadioInput() {
  event.preventDefault();
  var dishes = document.getElementsByName("dish");
  for (var i = 3; i >= 0; i--) {
    if (dishes[i].checked === true && dishes[i].value === "entire-meal") {
      randomEntireMeal();
    } else if (dishes[i].checked === true) {
      getRandom(dishes[i].value);
    }
  }
  changeView();
}
