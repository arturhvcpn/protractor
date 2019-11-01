module.exports = class LoginPage{
	
	login() {

		let driver = browser.driver;

		driver.manage().window().maximize(); 
		
		/*CODE WITHOUT ENVIRONMENT PARAMS
		*/		
			// driver.get('https://core.plataformatarget.com.br/web/facilit/login');
			driver.get('http://localhost:8080/web/facilit/login');
			element(by.id('_58_login')).sendKeys('rudiney@facilit.com.br');
			element(by.id('_58_password')).sendKeys('123456');
		
		/*CODE WITH ENVIRONMENT PARAMS, 
		* Values defined on Linux and getted on conf.js
			driver.get(browser.params.url);
			element(by.id('_58_login')).sendKeys(browser.params.user);
			element(by.id('_58_password')).sendKeys(browser.params.password);
		*/
		
		//VERIFY SYSTEM ENVIRONMENT PARAMS
			//console.log("params: ", browser.params);
		
 		let buttonSignIn = 
			element(by.css('#p_p_id_58_ > div > div > form > div > div.buttons'));
	
		buttonSignIn.click();
		
	}
};

