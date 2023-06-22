const input = document.querySelector('input');

const dataLength = input.getAttribute('data-length');



input.addEventListener('blur', validation)

function validation() {
    const inputLength = input.value.length;
    if (Number(inputLength) === Number(dataLength)) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.remove('valid')
input.classList.add('invalid')
    }
}

