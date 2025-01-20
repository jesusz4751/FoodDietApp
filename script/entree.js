import {restaurants} from "../data/restaurants.js";
import { foodItem } from "./classes/food-item-class.js";
import { popupItem } from "./classes/popup-class.js";

const entrees = restaurants[sessionStorage.getItem('restaurant')].entree;
const userCalories = sessionStorage.getItem('calories');
if (!userCalories || userCalories < entrees.minCalories){
  window.location.href = 'home.html';
}

//Generate and create variable for error popup
const popupConstructor = new popupItem();
const popup = popupConstructor.createPopup('Not enough calories remaining');

const foodItemConstructor = new foodItem();
//Generate HTML for entree page
document.querySelector('.food-item-container').innerHTML += foodItemConstructor.generateHTML(entrees, userCalories);
//Create functionality for plus and minus buttons
foodItemConstructor.plusAndMinus(entrees, userCalories, popup);

//Move information from current page to next page
document.querySelectorAll('.food-select-button').forEach((button) => {
  button.addEventListener('click', () => {
    const foodAmount = document.getElementById(`amount-${button.dataset.foodId}`).textContent;
    sessionStorage.setItem('entreeAmount', foodAmount);
    sessionStorage.setItem('entree', button.dataset.foodId);
    window.location.href = 'side.html';
  });
})