const Entity = require('./entity.po');

module.exports = class EntityAccessView extends Entity {

    constructor(submenu){
        super();
        //this.menu = menu;
        this.submenu = submenu;
    }

    accessPage(){
        //this.menu.open();

        this.submenu.open();
    }

}