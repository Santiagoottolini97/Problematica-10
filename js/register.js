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

//BY TAG NAME
var labelLogin = document.getElementsByTagName("label");
var inputLogin = document.getElementsByTagName("input");
var buttonLogin = document.getElementsByTagName("button");
var formLogin = document.getElementsByTagName("form");

//QUERY SELECTOR
var btnSubmit = document.querySelector(".btnSend");

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
  //If the user focuses, the validation is canceled
  namer.addEventListener("focus", () => {
    errorName.innerHTML = "";
    namer.style.borderColor = "green";
  });
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
    email.style.borderColor = "green";
  });
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
    password.style.borderColor = "green";
  });
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
  } else if (!upperCasePassword(rPassword.value)) {
    errorPasswordR.style.color = "red";
    rPassword.style.borderColor = "red";
    errorPasswordR.innerHTML =
      "Your password must contain at least one uppercase letter.";
  } else if (!lowerCasePassword(rPassword.value)) {
    errorPasswordR.style.color = "red";
    rPassword.style.borderColor = "red";
    errorPasswordR.innerHTML =
      "Your password must contain at least one lowercase letter.";
  } else if (!numberPassword(rPassword.value)) {
    errorPasswordR.style.color = "red";
    rPassword.style.borderColor = "red";
    errorPasswordR.innerHTML =
      "Your password must contain at least one number.";
  } else if (rPassword.value.length < 8) {
    errorPasswordR.style.color = "red";
    rPassword.style.borderColor = "red";
    errorPasswordR.innerHTML = "Your password must contain at least 8 digit.";
  } else {
    errorPasswordR.innerHTML = "";
    rPassword.style.borderColor = "green";
  }
  rPassword.addEventListener("focus", () => {
    errorPasswordR.innerHTML = "";
    rPassword.style.borderColor = "green";
  });
}

//DOM Validations
function handlerOnBlurDOM() {
  if (formLogin.length === 0) {
    alert("Form DOM validation");
  }
  if (labelLogin.length !== 4) {
    alert("Label DOM validation");
  }
  if (inputLogin.length !== 4) {
    alert("Input DOM validation");
  }
  if (buttonLogin.length !== 1) {
    alert("Button DOM validation");
  }
}
handlerOnBlurDOM();

//Function to show the data
function dataCapture() {
  titleData.innerHTML = "USER INFO";
  containerData.style.color = "blue";
  containerData.innerHTML = `Name: ${namer.value}<br>Email: ${email.value}<br>Password: ${password.value}<br>Repeat Passord: ${rPassword.value}<br>`;
}

function handleRegister() {
  const newUser = {
    namer: namer.value,
    email: email.value,
    password: password.value,
    rPassword: rPassword.value,
  };
  fetch("http://localhost:4000/postUser", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Accept": "application/json",
    },
  })
    .then((res) => res.text())
    .then((data) => console.log(data));
}

//Events blur and click
namer.addEventListener("blur", handlerOnBlurName);
email.addEventListener("blur", handlerOnBlurEmail);
password.addEventListener("blur", handlerOnBlurPassword);
rPassword.addEventListener("blur", handlerOnBlurRepeatPassword);
btnSubmit.addEventListener("click", () => {
  handlerOnBlurName();
  handlerOnBlurEmail();
  handlerOnBlurPassword();
  handleRegister();
  handlerOnBlurRepeatPassword();
  dataCapture();
});

//Validation email
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
