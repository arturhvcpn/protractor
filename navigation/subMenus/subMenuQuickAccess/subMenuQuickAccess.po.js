const MenuQuickAccessPage = require('../../menu/menuQuickAccess.po');

module.exports = class SubMenuQuickAccess extends MenuQuickAccessPage{

    constructor(seletorSubMenuQuickAccess){
        super();

        this.seletorSubMenuQuickAccess = seletorSubMenuQuickAccess;

    }

    open(){
        super.open();

        this.selector = this.seletorSubMenuQuickAccess;

        super.open();
    }
}