import { restaurants } from "../data/restaurants.js";

sessionStorage.clear();
const button = document.getElementById('next-button');
let calories = 0;

// Create a popup element
const popup = document.createElement('div');
popup.className = 'popup';
popup.textContent = 'Not enough calories, please enter a valid number';
document.body.appendChild(popup);


//If there are not enough calories, create popup
button.addEventListener('mouseenter', (e) => {
  calories = document.getElementById('calorie-input').value;
  if (calories < restaurants.mcDonalds.entree.minCalories){
    button.classList.add('disable');
    popup.style.display = 'block';
  }
  else{
    button.classList.remove('disable');
  }
});
button.addEventListener('mousemove', (e) => {
  // if (button.classList.contains('disabledPlus')){
    const popupWidth = popup.offsetWidth;
    popup.style.left = `${e.pageX - popupWidth / 2}px`;
    popup.style.top = `${e.pageY - 82}px`;
    // }
});
button.addEventListener('mouseleave', () => {
  // if (button.classList.contains('disabledPlus')){
    popup.style.display = 'none';
  // }
});

//Move on to next page if valid
button.addEventListener('click', () => {
  if(!button.classList.contains('disable')){
    calories = document.getElementById('calorie-input').value;
    sessionStorage.setItem('calories', calories);
    window.location.href = 'entree.html';
  }
});