import {restaurants} from "../data/restaurants.js";

// const userCalories = sessionStorage.getItem('calories');
const userCalories = 1000;

const entree = sessionStorage.getItem('entree');
const entreeAmount = sessionStorage.getItem('entreeAmount');
const side = sessionStorage.getItem('side');
const sideAmout = sessionStorage.getItem('sideAmount');
const totalCalories = (restaurants.mcDonalds.entree[entree].calories * entreeAmount) + (restaurants.mcDonalds.side[side].calories * entreeAmount);
const totalProtein = (restaurants.mcDonalds.entree[entree].protein * entreeAmount) + (restaurants.mcDonalds.side[side].protein * entreeAmount);
const totalCarbs = (restaurants.mcDonalds.entree[entree].carbs * entreeAmount) + (restaurants.mcDonalds.side[side].carbs * entreeAmount);
const totalFat = (restaurants.mcDonalds.entree[entree].fat * entreeAmount) + (restaurants.mcDonalds.side[side].fat * entreeAmount);
document.getElementById('calories').innerText = totalCalories;
document.getElementById('protein').innerText = totalProtein;
document.getElementById('carbs').innerText = totalCarbs;
document.getElementById('fat').innerText = totalFat;
