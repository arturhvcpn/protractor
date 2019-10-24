const MenuPlus = require('../../menu/menuPlus.po');
const selectorMenuPlusNewIndicator = '.test-open-indicator-editor';

module.exports = class NewIndicator extends MenuPlus{
	
	constructor(){
		super();
	}

	open(){
		super.open();

		this.selector = selectorMenuPlusNewIndicator;

		super.open();

	}

}