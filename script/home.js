import { restaurants } from "../data/restaurants.js";
import { popupItem } from "./classes/popup-class.js";

sessionStorage.clear();

//Update restaurant options menu to match with button size dynamically
const gridBox = document.getElementById('restaurant-selector');
const dropdownMenu = document.querySelector('.dropdown-menu');
const syncWidths = () => {
  const gridBoxWidth = gridBox.offsetWidth;
  dropdownMenu.style.width = `${gridBoxWidth}px`;
};
syncWidths();
window.addEventListener('resize', syncWidths);

let restaurantChoice = document.getElementById('restaurant-choice-text').dataset.restaurantId;
//Switching restaurant based on dropdown option
document.querySelectorAll('.dropdown-option').forEach((option) =>{
  option.addEventListener('click', () =>{
    //Swap the old and new restaurants
    const textbox = document.getElementById('restaurant-choice-text');
    const temp = textbox.dataset.restaurantId;
    restaurantChoice = option.dataset.restaurantId;
    textbox.dataset.restaurantId = restaurantChoice;
    textbox.innerText = restaurants[restaurantChoice].name;
    option.dataset.restaurantId = temp;
    option.innerText = restaurants[temp].name;
  })
})

//Generate and create variable for error popup
const popupConstructor = new popupItem();
const popup = popupConstructor.createPopup('Not enough calories, please enter a valid number');

const button = document.getElementById('next-button');
let calories = 0;
//If there are not enough calories, display popup
button.addEventListener('mouseenter', (e) => {
  calories = document.getElementById('calorie-input').value;
  if (calories < restaurants[restaurantChoice].entree.minCalories){
    button.classList.add('disable');
    popup.style.display = 'block';
  }
  else{
    button.classList.remove('disable');
  }
});
button.addEventListener('mousemove', (e) => {
    const popupWidth = popup.offsetWidth;
    popup.style.left = `${e.pageX - popupWidth / 2}px`;
    popup.style.top = `${e.pageY - 82}px`;
});
button.addEventListener('mouseleave', () => {
    popup.style.display = 'none';
});

//Move on to next page if valid
button.addEventListener('click', () => {
  if(!button.classList.contains('disable')){
    calories = document.getElementById('calorie-input').value;
    sessionStorage.setItem('calories', calories);
    sessionStorage.setItem('restaurant', restaurantChoice);
    window.location.href = 'entree.html';
  }
});
