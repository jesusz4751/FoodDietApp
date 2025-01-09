const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', () => {
  const calories = document.getElementById('calorie-input').value;
  sessionStorage.setItem('calories', calories);
  window.location.href = 'food_selector.html';
});