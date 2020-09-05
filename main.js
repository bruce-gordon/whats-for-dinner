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
var clearButton = document.querySelector(".clear");
var addRecipeButton = document.querySelector(".add-recipe-button");
var recipeForm = document.querySelector(".add-recipe-form");
var addNew = document.querySelector(".add-new-button");
var recipeType = document.querySelector("#recipe-type");
var recipeName = document.querySelector("#recipe-name");
letsCookButton.disabled = true;

letsCookButton.addEventListener("click", displayMealIdea);

clearButton.addEventListener("click", clearFoodIdea);

addRecipeButton.addEventListener("click", showForm);

addNew.addEventListener("click", collectUserRecipe);

function clearInput() {
  recipeType.value = '';
  recipeName.value = '';
}

function collectUserRecipe() {
  event.preventDefault();
  var x = recipeType.value;
  if (x === "Side" || x === "side") {
    meals.sides.push(recipeName.value);
    } else if (x === "Main Dish" || x === "Main dish" || x === "main dish") {
      meals.mains.push(recipeName.value);
    } else if (x === "Dessert" || x === "dessert") {
      meals.desserts.push(recipeName.value);
    } else {
      alert("Please enter a type: Side, Main Dish, or Dessert.")
    }
  clearInput();
}

function showForm() {
  recipeForm.classList.remove("hidden");
}

function activateCook() {
  letsCookButton.disabled = false;
}

function clearFoodIdea() {
  clearButton.classList.add("hidden");
  youShouldMake.classList.add("hidden");
  output.classList.add("hidden");
  cookPot.classList.remove("hidden");
}

function showButton() {
  clearButton.classList.remove("hidden");
}

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
  output.classList.remove("hidden");
}

function randomEntireMeal() {
  var sideDish = meals.sides[Math.floor(Math.random() * meals["sides"].length)];
  var mainDish = meals.mains[Math.floor(Math.random() * meals["mains"].length)];
  var dessertDish = meals.desserts[Math.floor(Math.random() * meals["desserts"].length)];
  var text = `${mainDish} with a side of ${sideDish} and ${dessertDish} for dessert!`
  insertText(text);
}

function displayMealIdea() {
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
  showButton();
}
