class LoginPage {
  get inputEmail() {
    return $(
      `div[class="containerLogin"]>
       form[class="loginForm"]>
       div[class="containerEmail"]>
       input[id="email"]`
    );
  }
  get inputPassword() {
    return $(
      `div[class="containerLogin"]>
       form[class="loginForm"]>
       div[class="containerPassword"]>
       input[id="password"]`
    );
  }
  get btnSubmit() {
    return $(
      `div[class="containerLogin"]>
       form[class="loginForm"]>
       button[type="button"]`
    );
  }
  get btnRegister() {
    return $(
      `div[class="containerLogin"]>
       form[class="loginForm"]>
       div[class="containerLinkRegister"]>
       a[class="linkRegister"]`
    );
  }
  get errorEmail() {
    return $(
      `div[class="containerLogin"]>
       form[class="loginForm"]>
       div[class="containerEmail"]>
       div[id="errorEmail"]`
    ).getText();
  }
  get errorPassword() {
    return $(
      `div[class="containerLogin"]>
       form[class="loginForm"]>
       div[class="containerPassword"]>
       div[id="errorPassword"]`
    ).getText();
  }

  buttonRegister() {
    this.btnRegister.click();
  }

  testPassword(email, password) {
    this.inputEmail.setValue(email);
    this.inputPassword.setValue(password);
    this.btnSubmit.click();
    return this.errorPassword;
  }
  
  testEmail(email, password) {
    this.inputEmail.setValue(email);
    this.inputPassword.setValue(password);
    this.btnSubmit.click();
    return this.errorEmail;
  }
}

module.exports = new LoginPage();
