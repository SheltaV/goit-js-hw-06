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

function createBoxes(amount) {
  input.textContent = amount;
  const items = [];
  for (let i = 0; i <= amount; i += 1) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${30}px`;
    item.style.height = `${30}px`;
    items.push(item)
  }
console.log(input.value)
  boxes.append(...items)
}


// console.log(createBoxes(5))