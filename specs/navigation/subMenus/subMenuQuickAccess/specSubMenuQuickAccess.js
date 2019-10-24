const SubMenuQuickAccess = require('../../../../navigation/subMenus/subMenuQuickAccess/subMenuQuickAccess.po');
const Selectors = require('../../../../util/Selectors');
const selectors = new Selectors();

describe('/e2e/specs/navigation/subMenus/subMenuQuickAccess/specSubMenuQuickAccess.js', function(){

    let subMenuQuickAccess;

    it('Open View MyPage from Quick Access', function(){
        
        const seletorQuickAccessMyPage = '.test-submenu-quick-access-USER_CLIENT_HOME';
        const selectorQuickAccessMyPageIsOpened = '.test-quick-access-user-client-home-opened';

        validateQuickAcces(seletorQuickAccessMyPage, selectorQuickAccessMyPageIsOpened);

    })

    it('Open View Agency from Quick Access', function(){
        
        const seletorQuickAccessAgencyPage = '.test-submenu-quick-access-AGENCY_HOME';
        const selectorQuickAccessAgencyOpened = '.test-quick-access-agency-opened';

        validateQuickAcces(seletorQuickAccessAgencyPage, selectorQuickAccessAgencyOpened);
    })

    it('Open View Year Page from Quick Access', function(){
        
        const seletorQuickAccessAgencyPage = '.test-submenu-quick-access-ANO_HOME';
        const selectorQuickAccessYearPageOpened = '.test-page-year-opened';

        validateQuickAcces(seletorQuickAccessAgencyPage, selectorQuickAccessYearPageOpened);
    })

    function validateQuickAcces (selectorIconToClick, seletorElementToTestPage){
        subMenuQuickAccess = new SubMenuQuickAccess(selectorIconToClick);
        
        subMenuQuickAccess.open();
        let elto = selectors.byCss(seletorElementToTestPage);
        
        subMenuQuickAccess.isPresent(elto);

    }


})