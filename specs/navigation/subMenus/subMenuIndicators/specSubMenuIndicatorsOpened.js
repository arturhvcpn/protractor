const Selectors = require('../../../../util/Selectors');
const selectors = new Selectors();
const SubMenuIndicators = require('../../../../navigation/subMenus/subMenuIndicators/subMenuIndicators.po')
const SubMenuMatrizIndicators = require('../../../../navigation/subMenus/subMenuIndicators/subMenuMatrizIndicators.po')

describe('/e2e/specs/navigation/subMenus/subMenuIndicators/specSubMenuIndicatorsOpened.js', function(){

    let subMenuIndicators;
    let subMenuMatrizIndicators;

    beforeEach(function(){
        subMenuIndicators = new SubMenuIndicators();
        
        subMenuMatrizIndicators = new SubMenuMatrizIndicators();
    })

    it('Opened View "Indicators', function(){

        subMenuIndicators.open();

        var selectorIndicatorsTitle = '.test-indicator-page-title';
        
        var elto = selectors.byCss(selectorIndicatorsTitle);
        
        subMenuIndicators.validate(elto,'tg-lang',"'planooperativo.indicators'");

    })

    it('Opened View "Matriz Indicators" ', function(){

        subMenuMatrizIndicators.open();

        var selectorMatrizIndicatorsTitle = '.test-matriz-indicator-page-title';
        
        var elto = selectors.byCss(selectorMatrizIndicatorsTitle);
        
        subMenuMatrizIndicators.validate(elto,'tg-lang',"'javax.portlet.title.indicator_matrix'");

    })
})