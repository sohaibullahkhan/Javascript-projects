// Reteriving HTML elements from DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Funcation to update class and message for errors
function showError(input, message) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Override the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // Override the text for small element using the input message
    small.innerText = message;
}

// Funcation to update class for success
function showSuccess(input) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add success
    formControl.className = 'form-control success';
}

// Function to check if email is vaild
function isvalidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} 

// Funcation to check if requried fields have data
function checkRequried(inputArray) {
    inputArray.forEach(function (input) {
       if (input.value === '') {
           showError(input,`${getFieldId(input)} is requried`);
       } else {
           showSuccess(input);
       }
    });
}

// Funcation to get the id of the input field with proper case
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// This is an Event Listner for the form on submit
form.addEventListener('submit', function(e) {
    // Stop page from reloading on submit
    e.preventDefault(); 
    checkRequried([username,email,password,password2]);
});