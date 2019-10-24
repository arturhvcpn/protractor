const Menu = require('./menu.po');
const selector = ".test-menu-plus";

module.exports = class MenuPlus extends Menu{
	
	constructor(){

		super(selector);
	}
	open(){
		super.open();
	}
};