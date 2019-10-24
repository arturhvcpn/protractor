const MenuIndicators = require('../../../navigation/menu/menuIndicators.po');
const selectorSubMenuIndicator = ".test-submenu-indicator-manager";

module.exports = class SubMenuIndicators extends MenuIndicators{
	
	constructor(){
		super();
	}

	open(){
		super.open();
		
		this.selector = selectorSubMenuIndicator;

		super.open();
	}
}
