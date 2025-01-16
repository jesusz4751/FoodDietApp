import {restaurants} from "../data/restaurants.js";

const entree = sessionStorage.getItem('entree');
const entreeAmount = sessionStorage.getItem('entreeAmount');
let side = '';
let sideAmount = 1;
let totalCalories = restaurants.mcDonalds.entree[entree].calories * entreeAmount;
let totalProtein = restaurants.mcDonalds.entree[entree].protein * entreeAmount;
let totalCarbs = restaurants.mcDonalds.entree[entree].carbs * entreeAmount;
let totalFat = restaurants.mcDonalds.entree[entree].fat * entreeAmount; 

//If there are side items, adds them to hte page
if (!sessionStorage.getItem('skip')){
  side = sessionStorage.getItem('side');
  sideAmount = sessionStorage.getItem('sideAmount');
  document.querySelector('.food-section').innerHTML += `
  <div class="food-item">
    <p class="food-amount" id="side-amount"></p>
    <p class="food-title" id="side-name"></p>
  </div>`
  document.getElementById('side-name').innerText = restaurants.mcDonalds.side[side].name;
  document.getElementById('side-amount').innerText = sideAmount + 'x';
  totalCalories += restaurants.mcDonalds.side[side].calories * sideAmount;
  totalProtein += restaurants.mcDonalds.side[side].protein * sideAmount;
  totalCarbs += restaurants.mcDonalds.side[side].carbs * sideAmount;
  totalFat += restaurants.mcDonalds.side[side].fat * sideAmount;
}
document.getElementById('calories').innerText = totalCalories;
document.getElementById('protein').innerText = totalProtein + 'g';
document.getElementById('carbs').innerText = totalCarbs + 'g';
document.getElementById('fat').innerText = totalFat + 'g';

document.getElementById('entree-name').innerText = restaurants.mcDonalds.entree[entree].name;
document.getElementById('entree-amount').innerText = entreeAmount + 'x';