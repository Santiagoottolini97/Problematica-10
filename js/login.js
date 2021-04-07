//BY ID INPUTS
var email = document.getElementById("email");
var password = document.getElementById("password");
var error = document.getElementById("error");
var pass = document.getElementById("error");
//BY TAG NAME
var labelLogin = document.getElementsByTagName("label");
var inputLogin = document.getElementsByTagName("input");
var buttonLogin = document.getElementsByTagName("button");
var formLogin = document.getElementsByTagName("form");

error.style.color = "red";

function validationLogin() {
  //Create an empty array
  var messageError = [];
  //validation email
  if (email.value === "" || email.value === null) {
    //a new position of array was created
    messageError.push("Complete the email");
  }
  //if the mail not contain the necesary simbols, return a message of error
  else if (!isEmail(email.value)) {
    messageError.push("The email is invalid");
  }
  //validation password
  if (password.value === "" || password.value === null) {
    messageError.push("Complete the password");
  } 
  else if (password.value.search(/[a-z]/) < 0) {
    messageError.push(
      "Your password must contain at least one lowercase letter."
    );
  }
  else if (password.value.search(/[A-Z]/) < 0) {
    messageError.push(
      "Your password must contain at least one uppercase letter."
    );
  }
  else if (password.value.search(/[0-9]/) < 0) {
    messageError.push(
      "Your password must contain at least one digit."
    );
  }
  else if (password.value.length < 8) {
    messageError.push(
      "Your password must contain at least 8 digit."
    );
  }

  //Validations tags of HTML
  if (formLogin.length === 0) {
    messageError.push("Not exist a form, please create one");
  }
  if (labelLogin.length > 2) {
    messageError.push("The label not exist, please create one");
  }
  if (inputLogin.length > 2) {
    messageError.push("The input not exist, please create one");
  }
  if (buttonLogin.length > 1) {
    messageError.push("The button not exist, please create one");
  }
  /*If the arrangement does not have any position, that is, all the 
  fields are created because it does not have an error message that shows 
  the message that it is correct*/
  if (messageError.length == 0) {
    messageError.push("Every validation has passed");
  }

  // The positions of array separate by ,
  error.innerHTML = messageError.join(", ");
  return false;
}

//function validation mail
function isEmail(email) {
  //test return a boolean
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
