class LoginPage {
    get inputEmail() {
        return $('input[id="email"]');
    }
    get inputPassword() {
        return $('input[id="password"]');
    }
    get errorEmail() {
        return $('div[id="errorEmail"]').getText();
    }
    get errorPassword() {
        return $('div[id="errorPassword"]').getText();
    }
    get btnSubmit() {
        return $('button[type="button"]');
    }
    get btnRegister() {
        return $('a[class="linkRegister"]');
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
