import {restaurants} from "../data/restaurants.js";

// const userCalories = sessionStorage.getItem('calories');
const userCalories = 1000;
// if (!userCalories){
//   window.location.href = 'home.html';
// }
let entrees = restaurants.mcDonalds.entree;
let allItemsHTML = '';

Object.values(entrees).forEach((item) => {
  if (item.calories <= userCalories){
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
        <button class="minus amount-button fadeReverse"><i class="fa-solid fa-minus"></i></button>
        <p class="amount-indicator">1</p>
        <button class="plus amount-button fadeReverse"><i class="fa-solid fa-plus"></i></button>
      </div>
      <button class="food-select-button fade">Select</button>
    </div>`;
  }
});
document.querySelector('.food-item-container').innerHTML += allItemsHTML;