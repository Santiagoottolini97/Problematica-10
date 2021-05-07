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
            expect(LoginPage.testEmail('santiago@gmail.com', 'Santi123')).toBe('');
            browserPause();
        });
        it('Empty email', () => {
            expect(LoginPage.testEmail('', 'Santi123')).toBe('Complete with your email');
            browserPause();
        });
        it('Email Invalid', () => {
            expect(LoginPage.testEmail('santi@gmail', 'Santi123')).toBe('The email is invalid');
            browserPause();
        });
    });
    describe('TEST LOGIN PASSWORD', () => {
        it('Valid password', () => {
            expect(LoginPage.testPassword('santiago@gmail.com', 'Santi123')).toBe('');
            browserPause();
        });
        it('Password must contain 8 digits', () => {
            expect(LoginPage.testPassword('santiago@gmail.com', 'Sa123')).toBe(
                'Your password must contain at least 8 digit.'
            );
            browserPause();
        });
        it('Password without uppercase', () => {
            expect(LoginPage.testPassword('santiago@gmail.com', 'santiago')).toBe(
                'Your password must contain at least one uppercase letter.'
            );
            browserPause();
        });
        it('Password without numbers', () => {
            expect(LoginPage.testPassword('santiago@.com', 'Santi')).toBe(
                'Your password must contain at least one number.'
            );
            browserPause();
        });
        it('Password without lowercase', () => {
            expect(LoginPage.testPassword('santiago@.com', 'SANTI123')).toBe(
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
