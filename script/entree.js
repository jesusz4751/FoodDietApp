import {restaurants} from "../data/restaurants.js";
import {userData} from "../data/user.js";

let entrees = restaurants.mcDonalds.entree;
console.log(entrees);
let allItemsHTML = '';

// for (const item in entrees){
// }
Object.values(entrees).forEach((item) => {
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
    <img src="images/McDonalds/mccrispy-removebg-preview.png" class="food-image">
    <button class="food-select-button fade" id="button1">Select</button>
  </div>`;
})

document.querySelector('.food-item-container').innerHTML = allItemsHTML;
// console.log(document.querySelector('.food-item-container').innerHTML);