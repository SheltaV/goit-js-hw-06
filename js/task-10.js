function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const create = document.querySelector('button[data-create]');
const reset = document.querySelector('button[data-destroy]');
const input = document.querySelector('input')

create.addEventListener('click', createBoxes)

function createBoxes() {
  const amount = input.value;
  const items = [];
  for (let i = 1; i <= amount; i += 1) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${30 + 10 * i}px`;
    item.style.height = `${30 + 10 * i}px`;
    items.push(item)
  }
  boxes.append(...items)
}

reset.addEventListener('click', removeBoxes)

function removeBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}