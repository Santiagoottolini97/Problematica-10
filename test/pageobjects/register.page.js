class RegisterPage {
    get inputName() {
        return $('input[id="name"]');
    }
    get inputEmail() {
        return $('input[id="email"]');
    }
    get inputPassword() {
        return $('input[id="password"]');
    }
    get inputRepeatPassword() {
        return $('input[id="rPassword"]');
    }
    get errorEmail() {
        return $('div[id="errorEmail"]').getText();
    }
    get errorPassword() {
        return $('div[id="errorPassword"]').getText();
    }
    get errorName() {
        return $('div[id="errorName"]').getText();
    }
    get errorRepeatPassword() {
        return $('div[id="errorPasswordR"]').getText();
    }
    get btnSubmit() {
        return $('button[type="button"]');
    }
    get btnLogin() {
        return $('a[class="linkLogin"]');
    }

    buttonLogin() {
        this.btnLogin.click();
    }

    testEmail(name, email, password, repeatPassword) {
        this.inputName.setValue(name);
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.inputRepeatPassword.setValue(repeatPassword);
        this.btnSubmit.click();
        return this.errorEmail;
    }
    testName(name, email, password, repeatPassword) {
        this.inputName.setValue(name);
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.inputRepeatPassword.setValue(repeatPassword);
        this.btnSubmit.click();
        return this.errorName;
    }
    testPassword(name, email, password, repeatPassword) {
        this.inputName.setValue(name);
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.inputRepeatPassword.setValue(repeatPassword);
        this.btnSubmit.click();
        return this.errorPassword;
    }
    testRepeatPassword(name, email, password, repeatPassword) {
        this.inputName.setValue(name);
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.inputRepeatPassword.setValue(repeatPassword);
        this.btnSubmit.click();
        return this.errorRepeatPassword;
    }
}

module.exports = new RegisterPage();
