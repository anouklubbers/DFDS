/* Password message */

var loginButton = document.getElementById('login');
var password = document.getElementById('password');
var message = document.getElementById('message');
var correctPassword = "goed";

function checkPassword() {

  if (password.value == correctPassword) {
    //
  } else {
    message.innerHTML = "Wachtwoord verkeerd, probeer opnieuw.";
    event.preventDefault();
  }
}

loginButton.addEventListener("click", checkPassword);
