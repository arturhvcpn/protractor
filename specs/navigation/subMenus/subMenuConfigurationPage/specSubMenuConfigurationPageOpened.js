const SubMenuConfigurationPage = require('../../../../navigation/subMenus/subMenuConfigurationPage/subMenuConfigurationPage.po');
const Selectors = require('../../../../util/Selectors');
const selectors = new Selectors();
const goToHomePage = require('../../../../util/goToHomePage.js');

describe('/e2e/specs/navigation/subMenus/subMenuConfigurationPage/specSubMenuConfigurationPageOpened.js', function(){

    let subMenuPageConfiguration;
    
    beforeEach(function(){
        subMenuPageConfiguration = new SubMenuConfigurationPage();
    })

    it('Opened View "Config Page General" ', function(){

        subMenuPageConfiguration.openConfigPageGeneral();

        var selectorId = 'tg-config-pages';
        
        var elto = selectors.byId(selectorId);
        
        subMenuPageConfiguration.validate(elto, 'ng-controller', 'ConfigPagesCtrl');

        goToHomePage(selectors);
        
    })

    it('Opened View "Config Page Specific" ', function(){
        
        subMenuPageConfiguration.openConfigPageSpecific();

        var selectorId = 'tg-config-pages';
        
        var elto = selectors.byId(selectorId);
        
        subMenuPageConfiguration.validate(elto, 'ng-controller', 'ConfigPagesCtrl');

    })
})