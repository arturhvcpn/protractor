const Menu = require('./menu.po');
const selector = ".test-menu-center-notification";

module.exports = class MenuNotificationPage extends Menu{
	
	constructor(){
			
		super(selector);
		
	}

	slideBarOpen(){
		super.open();
	}

	slideBarClose(){
		this.selector = 
			".test-close-slide-notification-center";
		
		super.close();

	}

};