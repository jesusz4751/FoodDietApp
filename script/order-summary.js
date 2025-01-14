import {restaurants} from "../data/restaurants.js";

// const userCalories = sessionStorage.getItem('calories');
const userCalories = 1000;

const entree = sessionStorage.getItem('entree');
const entreeAmount = sessionStorage.getItem('entreeAmount');
const side = sessionStorage.getItem('side');
const sideAmount = sessionStorage.getItem('sideAmount');
const totalCalories = (restaurants.mcDonalds.entree[entree].calories * entreeAmount) + (restaurants.mcDonalds.side[side].calories * entreeAmount);
const totalProtein = (restaurants.mcDonalds.entree[entree].protein * entreeAmount) + (restaurants.mcDonalds.side[side].protein * entreeAmount);
const totalCarbs = (restaurants.mcDonalds.entree[entree].carbs * entreeAmount) + (restaurants.mcDonalds.side[side].carbs * entreeAmount);
const totalFat = (restaurants.mcDonalds.entree[entree].fat * entreeAmount) + (restaurants.mcDonalds.side[side].fat * entreeAmount);
document.getElementById('calories').innerText = totalCalories;
document.getElementById('protein').innerText = totalProtein + 'g';
document.getElementById('carbs').innerText = totalCarbs + 'g';
document.getElementById('fat').innerText = totalFat + 'g';

document.getElementById('entree-name').innerText = restaurants.mcDonalds.entree[entree].name;
document.getElementById('entree-amount').innerText = entreeAmount + 'x';
document.getElementById('side-name').innerText = restaurants.mcDonalds.side[side].name;
document.getElementById('side-amount').innerText = sideAmount + 'X';