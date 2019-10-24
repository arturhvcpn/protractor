const LoginPage = require('../login/login.po');

describe('Should Login', function(){
    
    it('Loged', function(){ 
        //browser.ignoreSynchronization = true;
        const loginPage = new LoginPage();
        
        loginPage.login();
        // browser.ignoreSynchronization = false;
        var htmlElementWithNgApp = element(by.css('body'));
        
        //VALIDAÇÃO DO LOGIN
        expect(htmlElementWithNgApp.getAttribute('ng-app')).toBe('target');

        browser.sleep(5000);
    })
})