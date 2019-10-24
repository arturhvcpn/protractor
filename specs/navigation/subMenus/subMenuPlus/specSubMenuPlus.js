const NewAssigment = require('../../../../navigation/subMenus/subMenuPlus/newAssigment.po');
const NewEntity = require('../../../../navigation/subMenus/subMenuPlus/newEntity.po');
const NewIndicator = require('../../../../navigation/subMenus/subMenuPlus/newIndicator.po');
const Selectors = require('../../../../util/Selectors');
const selectors = new Selectors();

describe('/e2e/specs/navigation/subMenus/subMenuPlus/specSubMenuNewAssigmentOpened.js', function(){

    let newAssigmentPage;
    let newEntityPage;
    let newIndicatorPage;

    it('Open View New Assigment', function(){
        newAssigmentPage = new NewAssigment();
        
        newAssigmentPage.openModal();
        
        let elto = selectors.byCss(".test-new-assignment-opened");
        
        newAssigmentPage.validate(elto, 'tg-lang', "'planooperativo.assignment.add'");
        
    })
    
    it('Close New Assignment' , function(){
        newAssigmentPage = new NewAssigment();

        newAssigmentPage.closeModal();

    })

    it('Open View New Entity', function(){
        newEntityPage = new NewEntity();

        newEntityPage.openSlideBar();
        
        var elto = selectors.byCss(".test-new-entity-opened");
        
        newEntityPage.validate(elto, 'tg-lang',"'planooperativo.entidade-father'");
        
        newEntityPage.closeSlideBar();

    })

    /*
        TODO: descobrir como o protractor trabalha com abertura de nova de aba. 
            Atualmente este teste quebra porque o submenu Plus 'Indicador' abre nova aba
    */
/*    it('Open View New Indicator from Submenu Plus', function(){
         newIndicatorPage = new NewIndicator();

         newIndicatorPage.open();
        
         var selectorIndicatorsAddPageTitle = 
             '.test-indicator-title-add-view';

         var attributeName = 'tg-lang';
        
         var attributeValueToSpec = 
             "'planooperativo.indicators.add-indicator'";
        

            newIndicatorPage.validateAccessPageByCss(
             selectorIndicatorsAddPageTitle, attributeName, attributeValueToSpec);

     })
*/

})