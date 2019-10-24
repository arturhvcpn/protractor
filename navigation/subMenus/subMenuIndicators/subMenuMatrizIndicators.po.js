const MenuIndicators = require('../../menu/menuIndicators.po');
const selectorSubMenuMatrizIndicator = ".test-submenu-matriz-indicator";

module.exports = class SubMenuMatrizIndicators extends MenuIndicators{
	
	constructor(){
		super();
	}

	open(){
		super.open();
		
		this.selector = selectorSubMenuMatrizIndicator;

		super.open();
	}
}
