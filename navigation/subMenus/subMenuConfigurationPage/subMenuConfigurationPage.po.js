const MenuPageConfiguration = require('../../../navigation/menu/menuPageConfiguration.po');

const selectorSubMenuConfigPageGeneral = '.test-submenu-config-page-general';
const selectorSubMenuConfigPageSpecific = '.test-submenu-config-page-specific';

module.exports = class SubMenuConfigurationPage extends MenuPageConfiguration{
	
	constructor(){
		super();
	}

	openConfigPageGeneral(){
		super.open();
		
		this.selector = selectorSubMenuConfigPageGeneral;

		super.open();
		
	}

	openConfigPageSpecific(){
		
		super.open();
		
		this.selector = selectorSubMenuConfigPageSpecific;

		super.open();

	}

}