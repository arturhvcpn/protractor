const Menu = require('./menu.po');
const selector = ".test-menu-management";

module.exports = class MenuManagementPage extends Menu{
	
	constructor(){

		super(selector);
	}
	open(){
		super.open();
	}
};