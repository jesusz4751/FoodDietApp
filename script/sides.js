import {restaurants} from "../data/restaurants.js";

// const userCalories = sessionStorage.getItem('calories');
const userCalories = 1000;
// if (!userCalories){
//   window.location.href = 'home.html';
// }
const entree = sessionStorage.getItem('entree');
const entreeAmount = sessionStorage.getItem('entreeAmount');
const caloriesRemaining = userCalories - (restaurants.mcDonalds.entree[entree].calories * entreeAmount);
document.getElementById('title').innerText = `You have ${caloriesRemaining} calories remaining`
let sides = restaurants.mcDonalds.side;
let allItemsHTML = '';

//Generate html for food items
Object.entries(sides).forEach(([key, item]) => {
  if (item.calories <= caloriesRemaining){
    allItemsHTML += `<div class="food-item">
      <div class="food-information-container">
        <p class="food-name">${item.name}</p>
        <div class="macro-container">
          <p class="macro">Calories</p>
          <p class="macro-amount">${item.calories}</p>
        </div>
        <div class="macro-container">
          <p class="macro">Protein</p>
          <p class="macro-amount">${item.protein}g</p>
        </div>
        <div class="macro-container">
          <p class="macro">Carbs</p>
          <p class="macro-amount">${item.carbs}g</p>
        </div>
        <div class="macro-container">
          <p class="macro">Fat</p>
          <p class="macro-amount">${item.fat}g</p>
        </div>
      </div>
      <div class="quantity-selector">
        <button class="minus amount-button fadeReverse" data-food-id="${key}"><i class="fa-solid fa-minus"></i></button>
        <p class="amount-indicator" id="amount-${key}">1</p>
        <button class="plus amount-button fadeReverse" data-food-id="${key}"><i class="fa-solid fa-plus"></i></button>
      </div>
      <button class="food-select-button fade" data-food-id="${key}">Select</button>
    </div>`;
  }
});
document.querySelector('.food-item-container').innerHTML += allItemsHTML;

//Logic for plus and minus buttons
document.querySelectorAll('.plus').forEach((button) => {
  button.addEventListener('click', () =>{
    const amountIndicator = document.getElementById(`amount-${button.dataset.foodId}`);
    const currentNumber = parseInt(amountIndicator.textContent, 10) || 0;
    const totalCalories = sides[button.dataset.foodId].calories * (currentNumber+1);
    if (totalCalories <= caloriesRemaining){
      amountIndicator.textContent = currentNumber + 1;
    }
  })
})
document.querySelectorAll('.minus').forEach((button) => {
  button.addEventListener('click', () =>{
    const amountIndicator = document.getElementById(`amount-${button.dataset.foodId}`);
    const currentNumber = parseInt(amountIndicator.textContent, 10) || 0;
    //Only subtract if greater than one
    if (currentNumber > 1){
      amountIndicator.textContent = currentNumber - 1;
    }
  })
})


//Move information from current page to next page
document.querySelectorAll('.food-select-button').forEach((button) => {
  button.addEventListener('click', () => {
    const foodAmount = document.getElementById(`amount-${button.dataset.foodId}`).textContent;
    sessionStorage.setItem('sideAmount', foodAmount);
    sessionStorage.setItem('side', button.dataset.foodId);
    window.location.href = 'order-summary.html';
  });
})