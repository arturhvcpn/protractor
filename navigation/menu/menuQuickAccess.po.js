const Menu = require('./menu.po');
const selector = '.test-menu-quick-access';

module.exports = class MenuQuickAccessPage extends Menu{
	
	constructor(){
			
		super(selector);
	}
	
	open(){
		super.open();
	}
};