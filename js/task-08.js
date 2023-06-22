const form = document.querySelector('.login-form');

form.addEventListener('submit', checkForm)

function checkForm(evt) {
    evt.preventDefault();
    const {
    elements: { email, password }
    } = evt.currentTarget;
    
    if (email.value === '' || password.value === '') {
        alert('All fields must be filled!');
    } else {console.log(`Email: ${email.value}, Password: ${password.value}`)}
    
    evt.currentTarget.reset()
}