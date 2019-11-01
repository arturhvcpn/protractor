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

    fillBasicRequiredFields(indicator){
        
        this.fillName(indicator);
        
        let ngModelIndicadorTypeSelect = 'data.indicator.typeValue';
        let cssOptionToSelect = '.test-indicator-type-PROCESS';
        this.selectItem(ngModelIndicadorTypeSelect, cssOptionToSelect);

        //FAZER CADASTRO DE INSTITUIÇÃO ou CRIAR BASE NOVA DEFAULT JÁ COM INSTITUIÇÃO?
        // let agencyName = "Facilit";
        let agencyName = indicator.agency;
        let cssSelector = '.test-search-agency-on-add-indicator .test-input-flexcomplete';
        this.searchEntityByName_QuickSearch(agencyName, cssSelector)

        // let responsibleName= 'Everson';
        let responsibleName = indicator.responsible;
        this.findResponsibleByName(responsibleName);
        
        this.findMonitorByName(indicator.monitor);

        let cssTabValues = '.test-indicator-tab-values';
        this.changeIndicatorTab(cssTabValues);
        
        let ngModelIndicatorPeriodicity = 'data.indicator.measurementIntervalNumberDays';
        let cssOptionPeriodicityMontly = 'option[label="Quinzenal"]';
        this.selectItem(ngModelIndicatorPeriodicity, cssOptionPeriodicityMontly);
      
    }

    fillName(indicator){
        // this.indicator.name = 'Ind. Test Protractor '
        //     .concat(this.dateTime)
        //     .concat(' - ')
        //     .concat(browser.browserName);
        let cssInputIndicatorName = '.test-indicator-name';

        this.fillInputField(indicator.name, cssInputIndicatorName);
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