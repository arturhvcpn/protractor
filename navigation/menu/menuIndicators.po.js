const Menu = require('./menu.po');
const selector = ".test-menu-indicator";

module.exports = class MenuIndicators extends Menu{
	
	constructor(){

		super(selector);
	}
	open(){
		super.open();
	}
};