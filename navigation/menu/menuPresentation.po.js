const Menu = require('./menu.po');
const selector = ".test-menu-presentation";

module.exports = class PresentationPage extends Menu{
	
	constructor(){
			
		super(selector);
	}
	open(){
		super.open();
	}
};