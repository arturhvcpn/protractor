const IndicatorFillBasicRequiredFields = require('./indicatorFillBasicRequiredFields.po');
const IndicatorSearch = require('./indicatorSearch.po');
const Indicator = require('./indicator.po');
let indicator = new Indicator();

module.exports = class IndicatorTestCases{

    constructor(){

    }

    //TEST: Insert
    case742(){
        const indicatorFillBasicRequiredFields = new IndicatorFillBasicRequiredFields();
        
        indicatorFillBasicRequiredFields.fillBasicRequiredFields();

        var cssTabValues = '.test-indicator-tab-data';
        indicatorFillBasicRequiredFields.changeIndicatorTab(cssTabValues);

        var cssIndicatorGroupTactical = '.test-tactical';
        indicatorFillBasicRequiredFields.selectIndicatorGroup(cssIndicatorGroupTactical);

        var cssAddButton = '.test-indicator-add-button';
        indicatorFillBasicRequiredFields.clickByCss(cssAddButton);

        var cssPageTitle = '.text-edit-indicator';
       
        var pageTitle = indicatorFillBasicRequiredFields.selectors.byCss(cssPageTitle);
        
            //Se indicador foi salvo com sucesso, o título da página muda para 'Editar Indicador'
        indicatorFillBasicRequiredFields.validate(pageTitle, 'tg-lang', "'planooperativo.indicators.edit-indicator'");

        indicator = indicatorFillBasicRequiredFields.indicator;
    }

    //TEST: Advanced Search
    case743(){

        let indicatorSearch = new IndicatorSearch();
        
        indicatorSearch.search(indicator.name, '.test-search-tactical', undefined,undefined, undefined,undefined,undefined);

        /*
        * Other search exemples
        *   Test Valid only if the search finds an indicator
        */
            // indicatorSearch.search(indicator.name, '.test-search-tactical', 'Fac ','Eve ', 'Eve ',undefined,undefined);
            // indicatorSearch.search(indicator.name, undefined, undefined, undefined,undefined,undefined,undefined);
            //indicatorSearch.search(indicator.name, '.test-search-tactical', 'Fac ','Eve ', 'Eve ', 'b Obj ','tag3');
            // indicatorSearch.search('firefox', undefined, undefined, undefined,undefined,undefined,undefined);
                
    }

}