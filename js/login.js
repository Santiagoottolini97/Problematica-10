var email = document.getElementById("email");
var password = document.getElementById("password");
var errorEmail = document.getElementById("errorEmail");
var errorPassword = document.getElementById("errorPassword");
var containerData = document.getElementById("containerData");
var titleData = document.getElementById("titleData");

var btnSubmit = document.querySelector(".btnSend");

//Empty array when the data will be capture
var saveData = [];

function handlerOnBlurEmail() {
  if (email.value === "" || email.value === null) {
    errorEmail.style.color = "red";
    email.style.borderColor = "red";
    errorEmail.innerHTML = "Complete with your email";
  } else if (!isEmail(email.value)) {
    errorEmail.style.color = "red";
    email.style.borderColor = "red";
    errorEmail.innerHTML = "The email is invalid";
  } else {
    errorEmail.innerHTML = "";
    email.style.borderColor = "green";
  }
  email.addEventListener("focus", () => {
    errorEmail.innerHTML = "";
  });
  //Save in an array the email
  saveData.push(email.value);
}

function handlerOnBlurPassword() {
  if (password.value === "" || password.value === null) {
    errorPassword.style.color = "red";
    errorPassword.innerHTML = "The password is invalid";
  } else if (!upperCasePassword(password.value)) {
    errorPassword.style.color = "red";
    errorPassword.innerHTML =
      "Your password must contain at least one uppercase letter.";
  } else if (!lowerCasePassword(password.value)) {
    errorPassword.style.color = "red";
    errorPassword.innerHTML =
      "Your password must contain at least one lowercase letter.";
  } else if (!numberPassword(password.value)) {
    errorPassword.style.color = "red";
    errorPassword.innerHTML = "Your password must contain at least one number.";
  } else if (password.value.length < 8) {
    errorPassword.style.color = "red";
    errorPassword.innerHTML = "Your password must contain at least 8 digit.";
  } else {
    errorPassword.innerHTML = "";
    password.style.borderColor = "green";
  }
  password.addEventListener("focus", () => {
    errorPassword.innerHTML = "";
  });
  //Save in an array the password
  saveData.push(password.value);
  saveData.splice(2, 3);
}

function dataCapture() {
  titleData.innerHTML = "DATOS";
  containerData.style.color = "blue";
  containerData.innerHTML = saveData.join("<br>");
}

//Fetch
//Capture de email value, the capture the response and show in the console
async function getUserEmail() {
  try {
    fetch(`https://jsonplaceholder.typicode.com/users/${email.value}`)
      .then(function (response) {
        return response.json();
      })
      .then((data) => console.log(data));
  } catch (error) {
    res.json({ message: error });
  }
}

//Events blur and click
email.addEventListener("blur", handlerOnBlurEmail);
password.addEventListener("blur", handlerOnBlurPassword);
btnSubmit.addEventListener("click", () => {
  handlerOnBlurEmail();
  handlerOnBlurPassword();
  dataCapture();
  getUserEmail();
});

//Validation mail
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
//Validation upper case
function upperCasePassword(password) {
  return /[A-Z]/.test(password);
}
//Validation lower case
function lowerCasePassword(password) {
  return /[a-z]/.test(password);
}
//Validation number
function numberPassword(password) {
  return /[0-9]/.test(password);
}
