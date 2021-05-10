const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {
    function browserPause() {
        browser.pause(1000);
    }

    //Variables
    const urlRegister = 'http://localhost:4000/public/register.html';
    const urlLogin = 'http://localhost:4000/public/login.html';

    describe('TEST LOGIN MAIL', () => {
        it('Valid credentials', () => {
            browser.url(urlLogin);
            LoginPage.testLogin('santiago@gmail.com', 'Santi123')
            expect(LoginPage.errorEmail).toBe('');
            browserPause();
        });
        it('Empty email', () => {
            LoginPage.testLogin('', 'Santi123')
            expect(LoginPage.errorEmail).toBe('Complete with your email');
            browserPause();
        });
        it('Email Invalid', () => {
            LoginPage.testLogin('santi@gmail', 'Santi123')
            expect(LoginPage.errorEmail).toBe('The email is invalid');
            browserPause();
        });
    });
    describe('TEST LOGIN PASSWORD', () => {
        it('Valid password', () => {
            LoginPage.testLogin('santiago@gmail.com', 'Santi123')
            expect(LoginPage.errorPassword).toBe('');
            browserPause();
        });
        it('Password must contain 8 digits', () => {
            LoginPage.testLogin('santiago@gmail.com', 'Sa123')
            expect(LoginPage.errorPassword).toBe(
                'Your password must contain at least 8 digit.'
            );
            browserPause();
        });
        it('Password without uppercase', () => {
            LoginPage.testLogin('santiago@gmail.com', 'santiago')
            expect(LoginPage.errorPassword).toBe(
                'Your password must contain at least one uppercase letter.'
            );
            browserPause();
        });
        it('Password without numbers', () => {
            LoginPage.testLogin('santiago@.com', 'Santi')
            expect(LoginPage.errorPassword).toBe(
                'Your password must contain at least one number.'
            );
            browserPause();
        });
        it('Password without lowercase', () => {
            LoginPage.testLogin('santiago@.com', 'SANTI123')
            expect(LoginPage.errorPassword).toBe(
                'Your password must contain at least one lowercase letter.'
            );
            browserPause();
        });
    });
    describe('TEST BUTTON CREATE ACCOUNT', () => {
        it('Button "Create account"', () => {
            LoginPage.buttonRegister();
            if (browser.getUrl() === urlRegister) console.log('-------BUTTON PASS-----');
            else throw new Error('ERROR');
            browserPause();
        });
    });
});
