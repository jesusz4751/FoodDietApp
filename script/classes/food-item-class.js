export class foodItem{
  //Generate html for food items
  generateHTML(entrees, userCalories, ){
    let allItemsHTML = '';
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
    return allItemsHTML;
  }


  //Logic for plus and minus buttons
  plusAndMinus(entrees, userCalories, popup){
    //Event listener required for popup functionality
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    });
    //Functionality for plus buttons
    document.querySelectorAll('.plus').forEach((button) => {
      const id = button.dataset.foodId
      const calories = entrees[id].calories;
      //Disable upon generation if not enough calories for two items
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
      //Event listeners for popup appearance
      button.addEventListener('mouseenter', (e) => {
          popup.style.display = 'block';
      });
      button.addEventListener('mousemove', (e) => {
          const popupWidth = popup.offsetWidth;
          popup.style.left = `${e.pageX - popupWidth / 2}px`;
          popup.style.top = `${e.pageY - 82}px`;
      });
      button.addEventListener('mouseleave', () => {
          popup.style.display = 'none';
        
      });
    })
    //Logic for minus button
    document.querySelectorAll('.minus').forEach((button) => {
      const id = button.dataset.foodId;
      button.addEventListener('click', () =>{
        const amountIndicator = document.getElementById(`amount-${id}`);
        const currentNumber = parseInt(amountIndicator.textContent, 10) || 0;
        //Only subtract if greater than one
        if (currentNumber > 1){
          amountIndicator.textContent = currentNumber - 1;
          //Disable subtract button if cannot subtract any more.
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
  }
}