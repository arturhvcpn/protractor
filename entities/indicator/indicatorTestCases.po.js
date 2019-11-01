const IndicatorFillBasicRequiredFields = require('./indicatorFillBasicRequiredFields.po');
const IndicatorSearch = require('./indicatorSearch.po');

module.exports = class IndicatorTestCases{

    constructor(){

    }

    //TEST: Insert
    case742(indicator){

        const indicatorFillBasicRequiredFields = new IndicatorFillBasicRequiredFields();

        indicatorFillBasicRequiredFields.fillBasicRequiredFields(indicator);

        var cssTabValues = '.test-indicator-tab-data';
        indicatorFillBasicRequiredFields.changeIndicatorTab(cssTabValues);

        var cssIndicatorGroupTactical = '.test-tactical';
        indicatorFillBasicRequiredFields.selectIndicatorGroup(cssIndicatorGroupTactical);

        var cssAddButton = '.test-indicator-add-button';
        indicatorFillBasicRequiredFields.clickByCss(cssAddButton);

        var cssPageTitle = '.text-edit-indicator';
       
        var pageTitle = indicatorFillBasicRequiredFields.selectors.byCss(cssPageTitle);
        // browser.wait(EC.visibilityOf(pageTitle),    
        //     5000, 'waiting for pageTitle to appear')
            //Se indicador foi salvo com sucesso, o título da página muda para 'Editar Indicador'
        indicatorFillBasicRequiredFields.validate(pageTitle, 'tg-lang', "'planooperativo.indicators.edit-indicator'");

    }

    //TEST: Advanced Search
    case743(indicator){
        
        let indicatorSearch = new IndicatorSearch();
        
        indicatorSearch.search(indicator.name, '.test-search-tactical', undefined,undefined, undefined,undefined,undefined);

        /*
        * Other search exemples
        *   Test Valid only if the search finds an indicator
        */
            // indicatorSearch.search(indicator.name, '.test-search-tactical', 'Facilit','Everson', 'Everson',undefined,undefined);
            // indicatorSearch.search(indicator.name, undefined, undefined, undefined,undefined,undefined,undefined);
            //indicatorSearch.search(indicator.name, '.test-search-tactical', 'Facilit','Everson', 'Everson', 'b Objejtivo rlb','tag3');
            // indicatorSearch.search('firefox', undefined, undefined, undefined,undefined,undefined,undefined);
             
    }

}