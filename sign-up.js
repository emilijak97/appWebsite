// form 
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('formVal');
const errorElement = document.getElementById('error');


//prevent form from submiting if we have errors
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = [];

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
    } 

    if (password.value.length >= 15) {
        messages.push('Password must be less than 15 characters');
    } 

    if (password.value === 'password') {
        messages.push('Password cannot be password');
    } 

    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ');
        errorElement.classList.add('error');
    } else {
        console.log("Form has been submitted");
        console.log(firstName.value);
        errorElement.innerText = "";
        errorElement.classList.remove('error');
        form.reset();
        alert("Your account is created!")
    }
});