const RegisterPage = require('../pageobjects/register.page');

describe('My Register application', () => {

    //Variables
    const urlRegister = 'http://localhost:4000/public/register.html';
    const urlLogin = 'http://localhost:4000/public/login.html';

    function browserPause() {
        browser.pause(1000); 
    }
    describe('TEST REGISTER NAME', () => {
        it('Valid credentials', () => {
            browser.url(urlRegister)
            RegisterPage.testRegister('Santiago Ottolini', 'santiago@gmail.com', 'Santi123', 'Santi123')
            expect(RegisterPage.errorName).toBe('');
            browserPause();
        });
        it('Empty name', () => {
            RegisterPage.testRegister('', 'santiago@gmail.com', 'Santi123', 'Santi123')
            expect(RegisterPage.errorName).toBe(
                'Complete the name please'
            );
            browserPause();
        });
        it('Name without space', () => {
            RegisterPage.testRegister('Santi', 'sa@hot.', 'Santi123', 'Santi123')
            expect(RegisterPage.errorName).toBe(
                'The name must cotaint space blank'
            );
            browserPause();
        });
    });
    describe('TEST REGISTER EMAIL', () => {
        it('Valid credentials', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santiago@gmail.com', 'Santi123', 'Santi123')
            expect(RegisterPage.errorEmail).toBe('');
            browserPause();
        });
        it('Empty email', () => {
            RegisterPage.testRegister('Santiago Ottolini', '', 'Santi123', 'Santi123')
            expect(RegisterPage.errorEmail).toBe(
                'Complete with your email'
            );
            browserPause();
        });
        it('Email Invalid', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'Santi123', 'Santi123')
            expect(RegisterPage.errorEmail).toBe(
                'The email is invalid'
            );
            browserPause();
        });
    });
    describe('TEST REGISTER PASSWORD', () => {
        it('Valid password', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'Santi123', 'Santi123')
            expect(RegisterPage.errorPassword).toBe('');
            browserPause();
        });
        it('Password must contain 8 digits', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'Sa123', 'Sa123')
            expect(RegisterPage.errorPassword).toBe(
                'Your password must contain at least 8 digit.'
            );
            browserPause();
        });
        it('Password without uppercase', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'santi123', 'Santi123')
            expect(RegisterPage.errorPassword).toBe(
                'Your password must contain at least one uppercase letter.'
            );
            browserPause();
        });
        it('Empty password', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', '', 'Santi123')
            expect(RegisterPage.errorPassword).toBe(
                'Complete the password please'
            );
            browserPause();
        });
        it('Password without numbers', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'Santi', 'Santi123')
            expect(RegisterPage.errorPassword).toBe(
                'Your password must contain at least one number.'
            );
            browserPause();
        });
        it('Password without lowercase', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'SANTI123', 'Santi123')
            expect(RegisterPage.errorPassword).toBe(
                'Your password must contain at least one lowercase letter.'
            );
            browserPause();
        });
    });
    describe('TEST REPEAT PASSWORD', () => {
        it('Valid password', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'Santi123', 'Santi123')
            expect(RegisterPage.errorRepeatPassword).toBe(
                ''
            );
            browserPause();
        });
        it('Different password', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'Santi123', 'Santi12345')
            expect(RegisterPage.errorRepeatPassword).toBe(
                'Must be the same password'
            );
            browserPause();
        });
        it('Password must contain 8 digits', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'Sa123', 'Sa123')
            expect(RegisterPage.errorRepeatPassword).toBe(
                'Your password must contain at least 8 digit.'
            );
            browserPause();
        });
        it('Password without uppercase', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'santi123', 'santi123')
            expect(RegisterPage.errorRepeatPassword).toBe(
                'Your password must contain at least one uppercase letter.'
            );
            browserPause();
        });
        it('Empty password', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', '', '')
            expect(RegisterPage.errorRepeatPassword).toBe(
                'Complete the password please'
            );
            browserPause();
        });
        it('Password without numbers', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'Santi', 'Santi')
            expect(RegisterPage.errorRepeatPassword).toBe(
                'Your password must contain at least one number.'
            );
            browserPause();
        });
        it('Password without lowercase', () => {
            RegisterPage.testRegister('Santiago Ottolini', 'santi@gmail', 'SANTI123', 'SANTI123')
            expect(RegisterPage.errorRepeatPassword).toBe(
                'Your password must contain at least one lowercase letter.'
            );
            browserPause();
        });
    });
    describe('TEST BUTTON BACK TO LOGIN', () => {
        it('Button "Back to login"', () => {
            RegisterPage.buttonLogin();
            if (browser.getUrl() === urlLogin) console.log('-------BUTTON PASS-----');
            else throw new Error('ERROR');
            browserPause();
        });
    });
});
