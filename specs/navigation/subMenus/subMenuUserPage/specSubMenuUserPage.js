const SubMenuUserPage = require('../../../../navigation/subMenus/subMenuUserPage/subMenuUserPage.po');
const Selectors = require('../../../../util/Selectors');
const selectors = new Selectors();

describe('/e2e/specs/navigation/subMenus/subMenuUserPage', function(){

    let subMenu;

    it('Open View My Account', function(){

        const seletorSubMenuMyAccount = '.test-submenu-my-account';
        const selectorMyAccountIsOpened = '.test-my-account-opened';

        validateSubMenus(seletorSubMenuMyAccount, selectorMyAccountIsOpened);

        const linkVoltar = '.test-link-voltar-from-my-account';
        
        let link = selectors.byCss(linkVoltar);
        
        link.click();

    })

    function validateSubMenus(selectorIconToClick, seletorElementToTestPage){

        subMenu = new SubMenuUserPage(selectorIconToClick);
        
        subMenu.open();

        let elto = selectors.byCss(seletorElementToTestPage);
        
        subMenu.isPresent(elto);
    }

})