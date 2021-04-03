// form 
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


//prevent form from submiting if we have errors
form.addEventListener('submit', (e) => {
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

    // ako je niz messages veci od nule znaci da imamo greske i ne zelimo da se forma prihvati
    if (messages.length > 0) {
        e.preventDefault();
        //kada kliknemo submit dugme dobicemo poruku za svaku gresku
        errorElement.innerText = messages.join(', ');
    }
    
});