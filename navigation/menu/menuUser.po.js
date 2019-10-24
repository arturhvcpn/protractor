const Menu = require('./menu.po');
const selector = ".test-menu-user";

module.exports = class MenuUsersPage extends Menu{
	
	constructor(){
			
		super(selector);
	}
	open(){
		super.open();
	}
};