const MenuPlus = require('../../menu/menuPlus.po');
const selectorMenuPlusNewEntity = '.test-open-slide-bar-new-entity';

module.exports = class NewEntity extends MenuPlus{
	
	constructor(){
		super();
	}

	openSlideBar(){
		super.open();

		this.selector = selectorMenuPlusNewEntity;

		super.open();
	}

	closeSlideBar(){
		this.selector = '.test-closed-slideBar-editor-entity';
		
		super.close();

	}
}