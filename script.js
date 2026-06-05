const drinkBtn = document.getElementById("drink-button");
const foodBtn = document.getElementById("food-button");

const drink = document.getElementById("drink");
const food = document.getElementById("food");

drinkBtn.addEventListener("click", () => {
  drink.classList.remove("hidden");
  food.classList.add("hidden");

  drinkBtn.classList.add("active");
  foodBtn.classList.remove("active");
});

foodBtn.addEventListener("click", () => {
  food.classList.remove("hidden");
  drink.classList.add("hidden");

  foodBtn.classList.add("active");
  drinkBtn.classList.remove("active");
});