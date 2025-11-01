const form = document.getElementById('form');
const email = document.getElementById('email');
const popup = document.querySelector('.popup');
const main = document.querySelector('.main');
const emailVal = document.querySelector('.email-val');
const dismissButton = document.querySelector('.dismiss-btn');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(email.value == '') {
        setError('Email address is required');
    } else if(!isValidEmail(email.value)) {
        setError('Valid email required')
    } else {
        setSuccess(email);
    }
})

email.addEventListener('input', handleEmailChange);

function setError(message) {
    formVal = document.querySelector('.form-control');
    formVal.classList.add('error');
    const emailField = formVal.querySelector('.error-email');
    emailField.textContent = message;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setSuccess(email) {
    formVal = document.querySelector('.form-control');
    formVal.classList.remove('error');
    const emailField = formVal.querySelector('.error-email');
    emailField.textContent = '';

    popup.classList.remove('hidden');
    main.classList.add('hidden');
    emailVal.textContent = email.value;

}

dismissButton.addEventListener('click', function() {
    popup.classList.add('hidden');
    main.classList.remove('hidden');
    email.value = ''
})

function handleEmailChange() {
    const formVal = document.querySelector('.form-control');
    const emailField = formVal.querySelector('.error-email');
  
    if (email.value.trim() === '') {
      formVal.classList.remove('error');
      emailField.textContent = '';
      return;
    }
  
    if (isValidEmail(email.value)) {
      formVal.classList.remove('error');
      emailField.textContent = '';
    }
  }