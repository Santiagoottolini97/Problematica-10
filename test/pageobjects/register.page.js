class RegisterPage {
  get inputName() {
    return $(
      `div[class="containerRegister"]>
       form[class="registerForm"]>
       div[class="containerName"]>
       input[id="name"]`
    );
  }
  get inputEmail() {
    return $(
      `div[class="containerRegister"]>
       form[class="registerForm"]>
       div[class="containerEmail"]>
       input[id="email"]`
    );
  }
  get inputPassword() {
    return $(
      `div[class="containerRegister"]>
       form[class="registerForm"]>
       div[class="containerPassword"]>
       input[id="password"]`
    );
  }
  get inputRepeatPassword() {
    return $(
      `div[class="containerRegister"]>
       form[class="registerForm"]>
       div[class="containerPassword"]>
       input[id="rPassword"]`
    );
  }
  get btnSubmit() {
    return $(
      `div[class="containerRegister"]>
       form[class="registerForm"]>
       button[type="button"]`
    );
  }
  get btnLogin() {
    return $(
      `div[class="containerRegister"]>
       form[class="registerForm"]>
       div[class="containerLinkLogin"]>
       a[class="linkLogin"]`
    );
  }
  get errorEmail() {
    return $(
      `div[class="containerRegister"]>
       form[class="registerForm"]>
       div[class="containerEmail"]>
       div[id="errorEmail"]`
    ).getText();
  }
  get errorPassword() {
    return $(
      `div[class="containerRegister"]>
       form[class="registerForm"]>
       div[class="containerPassword"]>
       div[id="errorPassword"]`
    ).getText();
  }
  get errorName() {
    return $(
      `div[class="containerRegister"]>
       form[class="registerForm"]>
       div[class="containerName"]>
       div[id="errorName"]`
    ).getText();
  }
  get errorRepeatPassword() {
    return $(
      `div[class="containerRegister"]>
       form[class="registerForm"]>
       div[class="containerPassword"]>
       div[id="errorPasswordR"]`
    ).getText();
  }

  buttonLogin() {
    this.btnLogin.click();
  }

  testRegister(name, email, password, repeatPassword) {
    this.inputName.setValue(name);
    this.inputEmail.setValue(email);
    this.inputPassword.setValue(password);
    this.inputRepeatPassword.setValue(repeatPassword);
    this.btnSubmit.click();
  }

}

module.exports = new RegisterPage();
