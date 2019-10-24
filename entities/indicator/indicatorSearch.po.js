const IndicatorAccessView = require('./indicatorAccessView.po');
const Indicator = require('./indicator.po');
const Selectors = require('../../util/Selectors');
const selectors = new Selectors();

module.exports = class IndicatorSearch extends IndicatorAccessView{

    constructor(){
        super();
        
        super.accessPage();

        this.indicator = new Indicator();
    }

    search(indicatorName, groupCss, agencyName, managerName, monitorName, impactedEntityName, tagName){
        var selectorInputSearchField = '.test-indicator-input-search';
        this.fillInputField(indicatorName, selectorInputSearchField);

        if(groupCss !== undefined 
            || agencyName !== undefined
            || managerName !== undefined 
            || monitorName !== undefined 
            || impactedEntityName !== undefined 
            || tagName !== undefined){

            this.openAdvancedSearch();
        }
        
        if(groupCss!== undefined){
            this.selectGroup(groupCss);
        }
        
        if(agencyName !== undefined){
            var cssSelector = '.test-advanced-search-agency .test-input-flexcomplete';
            this.searchEntityByName_QuickSearch(agencyName, cssSelector);
        }
        
        if(managerName !== undefined){
            var cssSelector = '.test-advanced-search-responsible .test-input-flexcomplete';
            this.searchEntityByName_QuickSearch(managerName, cssSelector);
        }
        
        if(monitorName !== undefined){
            var cssSelector = '.test-advanced-search-monitor .test-input-flexcomplete';
            this.searchEntityByName_QuickSearch(monitorName, cssSelector);
        }
        
        if(impactedEntityName !== undefined){
            var cssSelector = '.test-advanced-search-impactedEntity .test-input-flexcomplete';
            this.searchEntityByName_QuickSearch(impactedEntityName, cssSelector);
        }

        if(tagName !== undefined){
            this.findTagByName(tagName);
        }

        this.clickButtonSearch();

        this.validateSearch(indicatorName);

    }
    
    validateSearch(name){
        var firstIndicatorName = 
            element(by.repeater('indicator in data.indicators').row(0).column('indicator.name'));
        
            //For test
        // firstIndicatorName.getAttribute('innerText').then((text) => {
        //     console.log('text ', text);
        //     console.log('name ', name);
        // });
        
        this.validate(firstIndicatorName,'innerText', name);

    }

    clickButtonSearch(){
        this.clickByCss('.test-indicator-button-search');
    }

    openAdvancedSearch(){
        var selectorButtonAdvanceSearch = '.test-open-advanced-search';
        this.clickByCss(selectorButtonAdvanceSearch);
    }

    selectGroup(groupCss){
        this.clickByCss(groupCss);
    }

    /*
    *Find Tag by Name
    *
    * @tagName
    *   Tag name to search
    * 
    * @Result
    *   tag selected
    * 
    * @Return
    *   -
    */
   findTagByName(tagName){
        var cssFromTagSelect = '.test-indicator-advanced-search-tag';
        this.clickByCss(cssFromTagSelect);

        var selectorToTagInputField = '.test-indicator-advanced-search-tag .ui-select-search';
        this.fillInputField(tagName, selectorToTagInputField);

        var cssTagNameFound = '.test-indicator-select-first-tag-result';
        this.clickByCss(cssTagNameFound);
    }    

}