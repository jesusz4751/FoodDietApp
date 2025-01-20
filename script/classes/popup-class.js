export class popupItem{
  // Create a popup element
  createPopup(text){
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = `${text}`;
    document.body.appendChild(popup);
    return popup;
  }
}