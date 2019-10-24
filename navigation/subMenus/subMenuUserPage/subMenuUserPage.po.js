const MenuUserPage = require('../../menu/menuUser.po');

module.exports = class SubMenuUserPage extends MenuUserPage{

    constructor(seletorSubMenuUserPage){
        super();

        this.seletorSubMenuUserPage = seletorSubMenuUserPage;

    }

    open(){
        super.open();
        
        this.selector = this.seletorSubMenuUserPage;
        
        //workaround: usamos o get(1) porque o Target apresentou 
        //duas classes iguais, mas só a segunda é clicável
        let link = element.all(by.css(this.selector)).get(1);
        
        link.click();
        
    }
}