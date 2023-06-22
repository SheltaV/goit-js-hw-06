function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
const textColor = widget.querySelector('.color');
const body = document.querySelector('body');
const changeColorBtn = widget.querySelector('.change-color')

changeColorBtn.addEventListener('click', changeColor)

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = `${body.style.backgroundColor}`
}