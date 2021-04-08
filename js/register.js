//BY ID INPUTS
var namer = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var rPassword = document.getElementById("rPassword");
var errorEmail = document.getElementById("errorEmail");
var errorPassword = document.getElementById("errorPassword");
var errorPasswordR = document.getElementById("errorPasswordR");
var errorName = document.getElementById("errorName");
var containerData = document.getElementById("containerData");
var titleData = document.getElementById("titleData");

//QUERY SELECTOR
var btnSubmit = document.querySelector(".btnSend");

var saveData = [];
function handlerOnBlurName() {
  if (namer.value === "" || namer.value === null) {
    errorName.style.color = "red";
    namer.style.borderColor = "red";
    errorName.innerHTML = "Complete the name please";
  } else if (password.value >= 6) {
    errorName.style.color = "red";
    namer.style.borderColor = "red";
    errorName.innerHTML = "Your password must contain at least 6 digit.";
  } else if (namer.value.indexOf(" ") <= 0) {
    errorName.style.color = "red";
    namer.style.borderColor = "red";
    errorName.innerHTML = "The name must cotaint space blank";
  } else {
    errorName.innerHTML = "";
    namer.style.borderColor = "green";
  }
  namer.addEventListener("focus", () => {
    errorName.innerHTML = "";
  });
  saveData.push(namer.value);
}

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
    password.style.borderColor = "red";
    errorPassword.innerHTML = "Complete the password please";
  } else if (!upperCasePassword(password.value)) {
    errorPassword.style.color = "red";
    password.style.borderColor = "red";
    errorPassword.innerHTML =
      "Your password must contain at least one uppercase letter.";
  } else if (!lowerCasePassword(password.value)) {
    errorPassword.style.color = "red";
    password.style.borderColor = "red";
    errorPassword.innerHTML =
      "Your password must contain at least one lowercase letter.";
  } else if (!numberPassword(password.value)) {
    errorPassword.style.color = "red";
    password.style.borderColor = "red";
    errorPassword.innerHTML = "Your password must contain at least one number.";
  } else if (password.value.length < 8) {
    errorPassword.style.color = "red";
    password.style.borderColor = "red";
    errorPassword.innerHTML = "Your password must contain at least 8 digit.";
  } else {
    errorPassword.innerHTML = "";
    password.style.borderColor = "green";
  }
  password.addEventListener("focus", () => {
    errorPassword.innerHTML = "";
  });
  saveData.push(password.value);
}
function handlerOnBlurRepeatPassword() {
  if (rPassword.value === "" || rPassword.value === null) {
    errorPasswordR.style.color = "red";
    rPassword.style.borderColor = "red";
    errorPasswordR.innerHTML = "The password is invalid";
  } else if (password.value !== rPassword.value) {
    errorPasswordR.style.color = "red";
    rPassword.style.borderColor = "red";
    errorPasswordR.innerHTML = "Must be the same password";
  } else {
    errorPasswordR.innerHTML = "";
    rPassword.style.borderColor = "green";
  }
  rPassword.addEventListener("focus", () => {
    errorPasswordR.innerHTML = "";
  });
  saveData.push(rPassword.value);
  saveData.splice(4, 5);
}

function dataCapture() {
  titleData.innerHTML = "DATOS";
  containerData.style.color = "blue";
  containerData.innerHTML = saveData.join("<br>");
  console.log(saveData);
}

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

namer.addEventListener("blur", handlerOnBlurName);
email.addEventListener("blur", handlerOnBlurEmail);
password.addEventListener("blur", handlerOnBlurPassword);
rPassword.addEventListener("blur", handlerOnBlurRepeatPassword);
btnSubmit.addEventListener("click", () => {
  handlerOnBlurName();
  handlerOnBlurEmail();
  handlerOnBlurPassword();
  handlerOnBlurRepeatPassword();
  dataCapture();
  getUserEmail();
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
