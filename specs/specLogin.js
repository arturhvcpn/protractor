const LoginPage = require('../login/login.po');

describe('Should Login', function(){
    
    it('Loged', function(){ 

        const loginPage = new LoginPage();

        // browser.waitForAngularEnabled(false);

        loginPage.login();

        var htmlElementWithNgApp = element(by.css('body'));
        
        //VALIDAÇÃO DO LOGIN
        expect(htmlElementWithNgApp.getAttribute('ng-app')).toBe('target');
        
        // browser.waitForAngularEnabled(true);
        
        browser.sleep(1000);
    })
})