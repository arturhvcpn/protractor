const IndicatorAccessView = require('../../indicator/indicatorAccessView.po');
const IndicatorAddView = require('../../indicator/indicatorAddView.po');
const IndicatorTestCases = require('../../indicator/indicatorTestCases.po');
let indicatorTestCases = new IndicatorTestCases();

describe('/e2e/specs/indicator/specIndicator.js', function(){

    beforeEach(function(){

    });
  
    // it('Access Indicator List View', function(){
    //     let indicadorAccessView = new IndicatorAccessView();
        
    //     indicadorAccessView.accessPage();
        
    //     var cssSelectorIndicatorsTitle = 
    //     '.test-indicator-page-title';
        
    //     var attributeName = 'tg-lang';
        
    //     var attributeValueToValidate = "'planooperativo.indicators'";
        
    //     indicadorAccessView.
    //     validateAccessPageByCss(cssSelectorIndicatorsTitle, attributeName, attributeValueToValidate);
        
    // });

    // it('Access Indicator Add View', function(){
    //     let indicadorAddView = new IndicatorAddView();
        
    //     indicadorAddView.accessPage();
        
    //     var selectorIndicatorsAddPageTitle = 
    //     '.test-indicator-title-add-view';
        
    //     var attributeName = 'tg-lang';
        
    //     var attributeValueToSpec = "'planooperativo.indicators.add-indicator'";
        
    //     indicadorAddView.validateAccessPageByCss(
    //         selectorIndicatorsAddPageTitle, attributeName, attributeValueToSpec);
            
    // });
        
    it('Create Tatical Indicator - C742 TestRail', function(){
        
        indicatorTestCases.case742();
        
    });      
    
    it('Advanced Search Tatical Indicator - C743 TestRail', function(){
        indicatorTestCases.case743();
    });

})