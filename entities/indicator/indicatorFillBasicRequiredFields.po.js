const IndicatorAddView = require('./indicatorAddView.po');
const Indicator = require('./indicator.po');
const getDateFormated = require('../../util/getDateFormated');
//const _ = require('underscore');

module.exports = class IndicatorFillBasicRequiredFields extends IndicatorAddView {

    constructor(){
        super();
        
        this.indicator = new Indicator();
        
        this.accessPage();

        this.dateTime = getDateFormated();
    }

    accessPage(){
        
        super.accessPage();

    }

    fillBasicRequiredFields(){
        
        this.fillName();
        
        var ngModelIndicadorTypeSelect = 'data.indicator.typeValue';
        var cssOptionToSelect = '.test-indicator-type-PROCESS';
        this.selectItem(ngModelIndicadorTypeSelect, cssOptionToSelect);

        var agencyName = "Fac ";//
        var cssSelector = '.test-search-agency-on-add-indicator .test-input-flexcomplete';
        this.searchEntityByName_QuickSearch(agencyName, cssSelector)

        var responsibleName= 'Eve ';
        this.findResponsibleByName(responsibleName);
        this.findMonitorByName(responsibleName);

        var cssTabValues = '.test-indicator-tab-values';
        this.changeIndicatorTab(cssTabValues);
        
        var ngModelIndicatorPeriodicity = 'data.indicator.measurementIntervalNumberDays';
        var cssOptionPeriodicityMontly = 'option[label="Quinzenal"]';
        this.selectItem(ngModelIndicatorPeriodicity, cssOptionPeriodicityMontly);
        
    }

    fillName(){
        this.indicator.name = 'Ind. Test Protractor '
            .concat(this.dateTime)
            .concat(' - ')
            .concat(browser.browserName);
        var cssInputIndicatorName = '.test-indicator-name';

        this.fillInputField(this.indicator.name, cssInputIndicatorName);
    }

    selectIndicatorGroup(cssIndicatorGroup){

        this.clickByCss(cssIndicatorGroup);

    }

    changeIndicatorTab(cssTabToSelect){

        this.clickByCss(cssTabToSelect);
    }

    searchIndicador(){
        var cssSearchInput =  '.test-indicator-input-search';
        this.fillInputField(this.indicator.name,cssSearchInput)

        var cssSearchButton =  '.test-indicator-button-search';
        this.clickByCss(cssSearchButton);
    }

     /*
    *Find Gestor by Name
    *
    * @responsibleName
    *   Responsible name to search
    * 
    * @Result
    *   responsible selected
    * 
    * @Return
    *   -
    */
   findResponsibleByName(responsibleName){
        var cssFromResponsibleSelect = '.test-select-responsible';
        this.clickByCss(cssFromResponsibleSelect);

        var selectorToResponsibleInputField = 'input[placeholder="Selecione o Gestor"]';
        this.fillInputField(responsibleName, selectorToResponsibleInputField);

        var cssResponsibleNameFound = '.test-responsible-name';
        this.clickByCss(cssResponsibleNameFound);
    }
    
    /*
    *Find Monitor by Name
    *
    * @monitorName
    *   Monitor name to search
    * 
    * @Result
    *   responsible selected
    * 
    * @Return
    *   -
    */
   findMonitorByName(monitorName){
        var cssFromMonitorSelect = '.test-monitor-select';
        this.clickByCss(cssFromMonitorSelect);

        var selectorToMonitorInputField = 'input[placeholder="Selecione o Monitor"]';
        this.fillInputField(monitorName, selectorToMonitorInputField);

        var cssMonitorNameFound = '.test-monitor-name';
        this.clickByCss(cssMonitorNameFound);
    }
}