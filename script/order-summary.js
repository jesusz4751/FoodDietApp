import {restaurants} from "../data/restaurants.js";

const restaurant = restaurants[sessionStorage.getItem('restaurant')];
const entree = sessionStorage.getItem('entree');
const entreeAmount = sessionStorage.getItem('entreeAmount');
let side = '';
let sideAmount = 1;
let totalCalories = restaurant.entree[entree].calories * entreeAmount;
let totalProtein = restaurant.entree[entree].protein * entreeAmount;
let totalCarbs = restaurant.entree[entree].carbs * entreeAmount;
let totalFat = restaurant.entree[entree].fat * entreeAmount; 

//If there are side items, adds them to the page
if (!sessionStorage.getItem('skip')){
  side = sessionStorage.getItem('side');
  sideAmount = sessionStorage.getItem('sideAmount');
  document.querySelector('.food-section').innerHTML += `
  <div class="food-item">
    <p class="food-amount" id="side-amount"></p>
    <p class="food-title" id="side-name"></p>
  </div>`
  document.getElementById('side-name').innerText = restaurant.side[side].name;
  document.getElementById('side-amount').innerText = sideAmount + 'x';
  totalCalories += restaurant.side[side].calories * sideAmount;
  totalProtein += restaurant.side[side].protein * sideAmount;
  totalCarbs += restaurant.side[side].carbs * sideAmount;
  totalFat += restaurant.side[side].fat * sideAmount;
}
document.getElementById('calories').innerText = totalCalories;
document.getElementById('protein').innerText = totalProtein + 'g';
document.getElementById('carbs').innerText = totalCarbs + 'g';
document.getElementById('fat').innerText = totalFat + 'g';

document.getElementById('entree-name').innerText = restaurant.entree[entree].name;
document.getElementById('entree-amount').innerText = entreeAmount + 'x';