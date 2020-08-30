// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');

//event listners
eventListeners();

function eventListeners() {
  // App Init
  document.addEventListener('DOMContentLoaded', appInit);

  // Validate the forms
  email.addEventListener('blur', validateField);
  subject.addEventListener('blur', validateField);
  message.addEventListener('blur', validateField);

  // Send Email & reset button
  sendEmailForm.addEventListener('submit', sendEmail);
  resetBtn.addEventListener('click', resetForm);
}

// functions

// App Initialization
function appInit() {
  // disable the send button on load
  sendBtn.disabled = true;
}
//send button function
function sendEmail(e) {
  e.preventDefault();
  //show the spinner
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'block';
 
       // Show the image
       const sendEmailImg = document.createElement('img');
       sendEmailImg.src = 'img/mail.gif';
       sendEmailImg.style.display = 'block';
  //hide spinner and show send email image
  setTimeout(function() {
    // Hide the spinner
    spinner.style.display = 'none';

    // Show the image
    document.querySelector('#loaders').appendChild( sendEmailImg );

    // After 5 seconds, hide the image and reset the form
    setTimeout(function() {
         sendEmailForm.reset();
         sendEmailImg.remove();
    }, 5000);
}, 3000 );
}
//validate the fields
function validateField() {
  let errors;

  // Validate the Length of the field
  validateLength(this);

  // Validate the email
  if(this.type === 'email') {
       validateEmail(this);
  }

  // Both will return errors, then check if there're any errors
  errors = document.querySelectorAll('.error');

  // Check that the inputs are not empty
  if(email.value !== '' && subject.value !== '' && message.value !== '' ) {
       if(errors.length === 0) {
            // the button should be enabled
            sendBtn.disabled = false;
       }
  }
}
//validate the lengths of the field
function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = 'green';
    field.classList.remove('error');
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add('error');
  }
}
// validate email (checks for @ in the value )
function validateEmail(field) {
  let emailText = field.value;
  // check if the emailText contains the @ sign
  if(emailText.indexOf('@') !== -1) {
       field.style.borderBottomColor = 'green';
       field.classList.remove('error');
  } else {
       field.style.borderBottomColor = 'red';
       field.classList.add('error');
  }
}

function resetForm(e) {
      e.preventDefault();

     sendEmailForm.reset();
      // disable the send button on load
      sendBtn.disabled = true;

}