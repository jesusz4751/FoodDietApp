import {restaurants} from "../data/restaurants.js";

const entrees = restaurants[sessionStorage.getItem('restaurant')].entree;
const userCalories = sessionStorage.getItem('calories');
if (!userCalories || userCalories < entrees.minCalories){
  window.location.href = 'home.html';
}
let allItemsHTML = '';

//Generate html for food items
Object.entries(entrees).forEach(([key, item]) => {
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
        <button class="minus amount-button disable minus-${key}" data-food-id="${key}"><i class="fa-solid fa-minus"></i></button>
        <p class="amount-indicator" id="amount-${key}">1</p>
        <button class="plus amount-button fadeReverse plus-${key}" data-food-id="${key}"><i class="fa-solid fa-plus"></i></button>
      </div>
      <button class="food-select-button fade" data-food-id="${key}">Select</button>
    </div>`;
  }
});
document.querySelector('.food-item-container').innerHTML += allItemsHTML;

// Create a popup element
const popup = document.createElement('div');
popup.className = 'popup';
popup.textContent = 'Not enough calories remaining';
document.body.appendChild(popup);

//Event listener required for popup functionality
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (event) => {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

//Logic for plus and minus buttons
document.querySelectorAll('.plus').forEach((button) => {
  const id = button.dataset.foodId
  const calories = entrees[id].calories;
  if (calories*2 > userCalories){
    button.classList.add('disable');
    button.classList.toggle('fadeReverse');
    button.classList.add('disabledPlus');
  }
  else{
    button.addEventListener('click', () =>{
      const amountIndicator = document.getElementById(`amount-${id}`);
      const currentNumber = parseInt(amountIndicator.textContent, 10) || 0;
      const totalCalories = calories * (currentNumber+1);
      //Adds number to indicator if enough calories left
      if (totalCalories <= userCalories){
        amountIndicator.textContent = currentNumber + 1;
        document.querySelector(`.minus-${id}`).classList.remove('disable');
        document.querySelector(`.minus-${id}`).classList.add('fadeReverse');
        //disables plus if cannot add another meal
        if (calories * (currentNumber+2) > userCalories){
          button.classList.add('disable');
          button.classList.remove('fadeReverse');
          button.classList.add('disabledPlus');
          popup.style.display = 'block';
          popup.style.left = `${mouseX - popup.offsetWidth / 2}px`;
          popup.style.top = `${mouseY - 82}px`;
        }
      }
    })
  }
  button.addEventListener('mouseenter', (e) => {
    if (button.classList.contains('disabledPlus')){
      popup.style.display = 'block';
    }
  });
  button.addEventListener('mousemove', (e) => {
    if (button.classList.contains('disabledPlus')){
      const popupWidth = popup.offsetWidth;
      popup.style.left = `${mouseX - popupWidth / 2}px`;
      popup.style.top = `${e.pageY - 82}px`;
    }
  });

  button.addEventListener('mouseleave', () => {
    if (button.classList.contains('disabledPlus')){
      popup.style.display = 'none';
    }
  });
})
document.querySelectorAll('.minus').forEach((button) => {
  const id = button.dataset.foodId;
  button.addEventListener('click', () =>{
    const amountIndicator = document.getElementById(`amount-${id}`);
    const currentNumber = parseInt(amountIndicator.textContent, 10) || 0;
    //Only subtract if greater than one
    if (currentNumber > 1){
      amountIndicator.textContent = currentNumber - 1;
      if (currentNumber === 2){
        button.classList.remove('fadeReverse');
        button.classList.add('disable');
      }
      document.querySelector(`.plus-${id}`).classList.add('fadeReverse');
      document.querySelector(`.plus-${id}`).classList.remove('disable');
      document.querySelector(`.plus-${id}`).classList.remove('disabledPlus');
    }
  })
})

//Move information from current page to next page
document.querySelectorAll('.food-select-button').forEach((button) => {
  button.addEventListener('click', () => {
    const foodAmount = document.getElementById(`amount-${button.dataset.foodId}`).textContent;
    sessionStorage.setItem('entreeAmount', foodAmount);
    sessionStorage.setItem('entree', button.dataset.foodId);
    window.location.href = 'side.html';
  });
})