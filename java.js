function validateForm() {
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var errorMessages = document.getElementById('errorMessages');

  errorMessages.innerHTML = '';

  var Error = false;

  if (!name || !phone || !email || !password || !confirmPassword) {
    errorMessages.innerHTML = '<p>Please fill in your data.</p>';
    Error = true;
  } else if (password !== confirmPassword) {
    errorMessages.innerHTML = '<p>Password do not match.</p>';
    Error = true;
  }

  if (Error) {
    return;
  }

  alert('Form submitted successfully!');
}
