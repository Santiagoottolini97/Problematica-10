var email = document.getElementById("email");
var password = document.getElementById("password");
var errorEmail = document.getElementById("errorEmail");
var errorPassword = document.getElementById("errorPassword");
var containerData = document.getElementById("containerData");
var titleData = document.getElementById("titleData");

var btnSubmit = document.querySelector(".btnSend");

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
  saveData.push(password.value);
  saveData.splice(2, 3);
}

function dataCapture() {
  titleData.innerHTML="DATOS"
  containerData.style.color = "blue";
  containerData.innerHTML = saveData.join("<br>");
}

email.addEventListener("blur", handlerOnBlurEmail);
password.addEventListener("blur", handlerOnBlurPassword);

btnSubmit.addEventListener("click", () => {
  handlerOnBlurEmail();
  handlerOnBlurPassword();
  dataCapture();
});

function isEmail(email) {
  //test return a boolean
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function upperCasePassword(password) {
  return /[A-Z]/.test(password);
}
function lowerCasePassword(password) {
  return /[a-z]/.test(password);
}
function numberPassword(password) {
  return /[0-9]/.test(password);
}
