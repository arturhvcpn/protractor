const MenuManagement = require('../../../navigation/menu/menuManagement.po');

module.exports = class SubMenuManagement extends MenuManagement{

    constructor(seletorSubMenuManagement){
        super();

        this.seletorSubMenuManagement = seletorSubMenuManagement;
    
    }

    open(){
        super.open();

        this.selector = this.seletorSubMenuManagement;

        super.open();
    }
}