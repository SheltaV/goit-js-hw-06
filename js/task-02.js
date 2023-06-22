const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul')
const listEls = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;
  return listItem;
})

list.append(...listEls)