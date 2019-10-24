const MenuPlus = require('../../menu/menuPlus.po');
const selectorMenuPlusNewAssigment = ".test-open-assignment-modal";
const selectorCloseModal = ".test-closed-assignment-modal"

module.exports = class NewAssigment extends MenuPlus{
	
	constructor(){
		super();
	}

	openModal(){
		super.open();

		this.selector = selectorMenuPlusNewAssigment;

		super.open();
	}

	closeModal(){
			
		this.selector = selectorCloseModal;
		
		super.close();

	}

}