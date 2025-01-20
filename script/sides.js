import {restaurants} from "../data/restaurants.js";
import { foodItem } from "./classes/food-item-class.js";
import { popupItem } from "./classes/popup-class.js";

const restaurant = sessionStorage.getItem('restaurant');
const sides = restaurants[restaurant].side;
const entree = sessionStorage.getItem('entree');
const entreeAmount = sessionStorage.getItem('entreeAmount');
const caloriesRemaining = sessionStorage.getItem('calories') - (restaurants[restaurant].entree[entree].calories * entreeAmount);
//If there are not enough calories left, end program
if (caloriesRemaining < sides.minCalories){
  sessionStorage.setItem('skip', true);
  window.location.href='order-summary.html';
}
document.getElementById('title').innerText = `You have ${caloriesRemaining} calories remaining`;

//Generate and create variable for error popup
const popupConstructor = new popupItem();
const popup = popupConstructor.createPopup('Not enough calories remaining');

const foodItemConstructor = new foodItem();
//Generate HTML for sides page
document.querySelector('.food-item-container').innerHTML += foodItemConstructor.generateHTML(sides, caloriesRemaining);
//Create functionality for plus and minus buttons
foodItemConstructor.plusAndMinus(sides, caloriesRemaining, popup);


//Move information from current page to next page
document.querySelectorAll('.food-select-button').forEach((button) => {
  button.addEventListener('click', () => {
    const foodAmount = document.getElementById(`amount-${button.dataset.foodId}`).textContent;
    sessionStorage.setItem('sideAmount', foodAmount);
    sessionStorage.setItem('side', button.dataset.foodId);
    window.location.href = 'order-summary.html';
  });
})