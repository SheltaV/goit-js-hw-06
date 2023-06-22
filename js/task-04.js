
const value = document.querySelector('#value');

const btnDown = document.querySelector('button[data-action="decrement"]');

const btnUp = document.querySelector('button[data-action="increment"]');

let counter = 0;



const handleClickDown = () => {
    counter -= 1;
    value.textContent = counter;
};
const handleClickUp = () => {
    counter += 1;
    value.textContent = counter;
};

btnDown.addEventListener("click", handleClickDown);
btnUp.addEventListener("click", handleClickUp);

