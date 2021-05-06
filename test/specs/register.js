/* const RegisterPage = require('../pageobjects/register.page');

describe('My Register application', () => {
    function openBrowser() {
        browser.url('file:///C:/Users/Santiago/Desktop/Problematica-10-FrontEnd/public/register.html');
    }
    function browserPause() {
        
    }
    it('Valid credentials', () => {
        openBrowser();
        expect(
            RegisterPage.register('Santiago Ottolini', 'santiago@gmail.com', 'Santi123', 'Santi123')
        ).toBeUndefined();
        browserPause();
    });
   it('Invalid name', () => {
        openBrowser();
        expect(RegisterPage.register('Santiago', 'santiago@gmail.com', 'Santi123', 'Santi123')).toBeUndefined();
        browserPause();
    });
    it('Invalid email', () => {
        openBrowser();
        expect(RegisterPage.register('Santiago Ottolini', 'sa@hot.', 'Santi123', 'Santi123')).toBeUndefined();
        browserPause();
    });
    it('Invalid password', () => {
        openBrowser();
        expect(RegisterPage.register('Santiago Ottolini', 'santiago@gmail.com', 'santi', 'Santi123')).toBeUndefined();
        browserPause();
    });
    it('Invalid repeat password', () => {
        openBrowser();
        expect(RegisterPage.register('Santiago Ottolini', 'santiago@gmail.com', 'Santi123', 'Santi1')).toBeUndefined();
        browserPause();
    });
    it('Invalid credentials', () => {
        openBrowser();
        expect(RegisterPage.register('San', '@gmail.om', 'Santi', 'Santi1')).toBeUndefined();
        browserPause();
    });
    it('All the fields are empty', () => {
        openBrowser();
        expect(RegisterPage.register('', '', '', '')).toBeUndefined();
        browserPause();
    }); 
});
 */