const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {

    function browserPause() {
         browser.pause(1000);
    }

    //Variables
    const urlRegister = 'file:///C:/Users/Santiago/Desktop/Problematica-10-FrontEnd/public/register.html';
    const urlLogin = 'file:///C:/Users/Santiago/Desktop/Problematica-10-FrontEnd/public/login.html';

    //Test email
    it('Valid credentials', () => {
        browser.url(urlLogin);
        expect(LoginPage.testEmail('santiago@gmail.com', 'Santi123')).toBe("");
        browserPause();
    });
     it('Empty email', () => {
        expect(LoginPage.testEmail('', 'Santi123')).toBe("Complete with your email");
        browserPause();
    });
    it('Email Invalid', () => {
        expect(LoginPage.testEmail('santi@gmail', 'Santi123')).toBe("The email is invalid");
        browserPause();
    });

    //Test password
    it('Password without uppercase', () => {
        expect(LoginPage.testPassword('santiago@gmail.com', 'santiago')).toBe("Your password must contain at least one uppercase letter.");
        browserPause();
    });
    it('Password without numbers', () => {
        expect(LoginPage.testPassword('santiago@.com', 'Santi')).toBe("Your password must contain at least one number.");
        browserPause();
    });
    it('Password without lowercase', () => {
        expect(LoginPage.testPassword('santiago@.com', 'SANTI123')).toBe("Your password must contain at least one lowercase letter.");
        browserPause();
    });
    
    //Button create account
    it('Button "Create account"', () => {
        LoginPage.buttonRegister();
        if (browser.getUrl() === urlRegister) console.log('-------BUTTON PASS-----');
        else throw new Error('ERROR');
        browserPause();
    }); 
});
