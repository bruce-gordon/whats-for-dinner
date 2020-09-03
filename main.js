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

var output = document.querySelector(".output");
var letsCookButton = document.querySelector(".lets-cook-button");
var cookPot = document.querySelector("#pot");
var youShouldMake = document.querySelector(".you-should-make");

letsCookButton.addEventListener("click", findRadioInput);

function getRandom(list) {
  var index = Math.floor(Math.random() * meals[list].length);
  output.innerText = `${meals[list][index]}!`;
}

function changeView() {
  cookPot.classList.add("hidden");
  youShouldMake.classList.remove("hidden");
}

function findRadioInput() {
  event.preventDefault();
  var dishes = document.getElementsByName("dish");
  for (var i = 0; i < dishes.length; i++) {
    if (dishes[i].checked === true) {
      getRandom(dishes[i].value);
    }
  }
  changeView();
}
