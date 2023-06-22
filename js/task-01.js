const itemList = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemList.length}`)

itemList.forEach(item => console.log(`Category: ${item.children[0].textContent}
Elements: ${item.children[1].children.length}`))
