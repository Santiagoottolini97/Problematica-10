//BY ID INPUTS
var namer = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var rPassword = document.getElementById("rPassword");
var error = document.getElementById("error");
//BY TAG NAME
var labelRegister = document.getElementsByTagName("label");
var inputRegister = document.getElementsByTagName("input");
var buttonRegister = document.getElementsByTagName("button");
var formRegister = document.getElementsByTagName("form");

error.style.color = "red";

function validationRegister() {
  //Create an empty array
  var messageError = [];
  //validation name
  if (namer.value === "" || namer.value === null) {
    //a new position of array was created
    messageError.push("Complete the name");
  }
  //validation mail
  if (email.value == "" || email.value == null) {
    messageError.push("Complete the email");
  }
  //if the mail not contain the necesary simbols, return a message of error
  else if (!isEmail(email.value)) {
    messageError.push("The email is not valid");
  }
  //validation password
  if (password.value === "" || password.value === null) {
    messageError.push("Complete the password");
  }
  //validation password
  if (rPassword.value === "" || rPassword.value === null) {
    messageError.push("Repeat your password please");
  }
  //validation: the password has to be exactly the same
  if (password.value !== rPassword.value) {
    messageError.push("Write the same password");
  }
  //Validations tags of HTML
  if (formRegister.length === 0) {
    messageError.push("Not exist a form, please create one");
  }
  if (labelRegister.length > 4) {
    messageError.push("The label not exist, please create one");
  }
  if (inputRegister.length > 4) {
    messageError.push("The input not exist, please create one");
  }
  if (buttonRegister.length > 1) {
    messageError.push("The button not exist, please create one");
  }
  /*If the arrangement does not have any position, that is, all the 
  fields are created because it does not have an error message that shows 
  the message that it is correct*/
  if (messageError.length == 0) {
    messageError.push("Every validation has passed");
  }
  error.innerHTML = messageError.join(", ");
  return false;
}

//Validation mail
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
