class RegisterPage {
    get inputName() {
        return $('#name');
    }
    get inputEmail() {
        return $('#email');
    }
    get inputPassword() {
        return $('#password');
    }
    get inputRepeatPassword() {
        return $('#rPassword');
    }
    /* get errorEmail() {
        return $('#errorEmail');
    } */
    get btnSubmit() {
        return $('button[type="button"]');
    }

    register(name, email, password, repeatPassword) {
        this.inputName.setValue(name);
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.inputRepeatPassword.setValue(repeatPassword);
        //this.errorEmail.setValue("The email is valid");
        this.btnSubmit.click();
    }
}

module.exports = new RegisterPage();
