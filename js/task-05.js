const input = document.querySelector('input');
const nameOutput = document.querySelector('#name-output')

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    nameOutput.textContent = event.currentTarget.value;
    if (nameOutput.textContent === '') {
        nameOutput.innerHTML = 'Anonymous'
    }
}
