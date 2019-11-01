const IndicatorAccessView = require('../../entities/indicator/indicatorAccessView.po');
const IndicatorAddView = require('../../entities/indicator/indicatorAddView.po');
const IndicatorTestCases = require('../../entities/indicator/indicatorTestCases.po');
let indicatorTestCases = new IndicatorTestCases();
const IndicatorReadSheet = require('../../entities/indicator/dataDrivenTest/indicatorReadSheet');

describe('/e2e/specs/indicator/specIndicator.js', function(){

    beforeEach(function(done){
        done();
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
        
    it('Create Tatical Indicator - C742 TestRail', function(done){
        let indicatorSheet = new IndicatorReadSheet();

        indicatorSheet.getIndicators().then(indicators => {
            
            global.indicatorsFromSheet = indicators;

            indicators.forEach(indicator => {

                indicatorTestCases.case742(indicator);
                done();
            })
        });
        
    },3600000);//1h SETTING TIMEOUT     
    
    it('Advanced Search Tatical Indicator - C743 TestRail', function(){
        
        if(global.indicatorsFromSheet !== undefined){
    
            let indicator = global.indicatorsFromSheet.pop();
        
            indicatorTestCases.case743(indicator);
        }
    
    });

})