const RegisterPage = require('../pageobjects/register.page');

describe('My Register application', () => {

    //Variables ("Copy and paste your URL of the folder")
    const urlRegister = 'file:///C:/Users/Santiago/Desktop/Problematica-10-FrontEnd/public/register.html';
    const urlLogin = 'file:///C:/Users/Santiago/Desktop/Problematica-10-FrontEnd/public/login.html';

    function browserPause() {
        browser.pause(1000);
    }
    describe('TEST REGISTER NAME', () => {
        it('Valid credentials', () => {
            browser.url(urlRegister)
            expect(RegisterPage.testName('Santiago Ottolini', 'santiago@gmail.com', 'Santi123', 'Santi123')).toBe('');
            browserPause();
        });
        it('Empty name', () => {
            expect(RegisterPage.testName('', 'santiago@gmail.com', 'Santi123', 'Santi123')).toBe(
                'Complete the name please'
            );
            browserPause();
        });
        it('Name without space', () => {
            expect(RegisterPage.testName('Santi', 'sa@hot.', 'Santi123', 'Santi123')).toBe(
                'The name must cotaint space blank'
            );
            browserPause();
        });
    });
    describe('TEST REGISTER EMAIL', () => {
        it('Valid credentials', () => {
            expect(RegisterPage.testEmail('Santiago Ottolini', 'santiago@gmail.com', 'Santi123', 'Santi123')).toBe('');
            browserPause();
        });
        it('Empty email', () => {
            expect(RegisterPage.testEmail('Santiago Ottolini', '', 'Santi123', 'Santi123')).toBe(
                'Complete with your email'
            );
            browserPause();
        });
        it('Email Invalid', () => {
            expect(RegisterPage.testEmail('Santiago Ottolini', 'santi@gmail', 'Santi123', 'Santi123')).toBe(
                'The email is invalid'
            );
            browserPause();
        });
    });
    describe('TEST REGISTER PASSWORD', () => {
        it('Valid password', () => {
            expect(RegisterPage.testPassword('Santiago Ottolini', 'santi@gmail', 'Santi123', 'Santi123')).toBe('');
            browserPause();
        });
        it('Password must contain 8 digits', () => {
            expect(RegisterPage.testRepeatPassword('Santiago Ottolini', 'santi@gmail', 'Sa123', 'Sa123')).toBe(
                'Your password must contain at least 8 digit.'
            );
            browserPause();
        });
        it('Password without uppercase', () => {
            expect(RegisterPage.testPassword('Santiago Ottolini', 'santi@gmail', 'santi123', 'Santi123')).toBe(
                'Your password must contain at least one uppercase letter.'
            );
            browserPause();
        });
        it('Empty password', () => {
            expect(RegisterPage.testPassword('Santiago Ottolini', 'santi@gmail', '', 'Santi123')).toBe(
                'Complete the password please'
            );
            browserPause();
        });
        it('Password without numbers', () => {
            expect(RegisterPage.testPassword('Santiago Ottolini', 'santi@gmail', 'Santi', 'Santi123')).toBe(
                'Your password must contain at least one number.'
            );
            browserPause();
        });
        it('Password without lowercase', () => {
            expect(RegisterPage.testPassword('Santiago Ottolini', 'santi@gmail', 'SANTI123', 'Santi123')).toBe(
                'Your password must contain at least one lowercase letter.'
            );
            browserPause();
        });
    });
    describe('TEST REPEAT PASSWORD', () => {
        it('Valid password', () => {
            expect(RegisterPage.testRepeatPassword('Santiago Ottolini', 'santi@gmail', 'Santi123', 'Santi123')).toBe(
                ''
            );
            browserPause();
        });
        it('Different password', () => {
            expect(RegisterPage.testRepeatPassword('Santiago Ottolini', 'santi@gmail', 'Santi123', 'Santi12345')).toBe(
                'Must be the same password'
            );
            browserPause();
        });
        it('Password must contain 8 digits', () => {
            expect(RegisterPage.testRepeatPassword('Santiago Ottolini', 'santi@gmail', 'Sa123', 'Sa123')).toBe(
                'Your password must contain at least 8 digit.'
            );
            browserPause();
        });
        it('Password without uppercase', () => {
            expect(RegisterPage.testRepeatPassword('Santiago Ottolini', 'santi@gmail', 'santi123', 'santi123')).toBe(
                'Your password must contain at least one uppercase letter.'
            );
            browserPause();
        });
        it('Empty password', () => {
            expect(RegisterPage.testRepeatPassword('Santiago Ottolini', 'santi@gmail', '', '')).toBe(
                'Complete the password please'
            );
            browserPause();
        });
        it('Password without numbers', () => {
            expect(RegisterPage.testRepeatPassword('Santiago Ottolini', 'santi@gmail', 'Santi', 'Santi')).toBe(
                'Your password must contain at least one number.'
            );
            browserPause();
        });
        it('Password without lowercase', () => {
            expect(RegisterPage.testRepeatPassword('Santiago Ottolini', 'santi@gmail', 'SANTI123', 'SANTI123')).toBe(
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
