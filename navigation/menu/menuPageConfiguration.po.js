const Menu = require('./menu.po');
const selectorMenuPageConfiguration = ".test-menu-config-page";

module.exports = class MenuPageConfiguration extends Menu{
	
	constructor(){
			
		super(selectorMenuPageConfiguration);
	}

	open(){
		super.open();
	}
	
};