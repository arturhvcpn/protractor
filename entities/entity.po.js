const Selectors = require('../util/Selectors');
const SpecBy = require('../util/SpecBy');

module.exports = class Entity extends SpecBy{

    constructor(){
        super();
        this.selectors = new Selectors();
    }

    /*
    *Select one item from a select item
    *
    * @ngModelFromSelectItem
    *   ng-model from <select> element
    * 
    * @cssFromOptionToSelect
    *   css from desired option
    * 
    * @Result
    *   item selected
    * 
    * @Return
    *   -
    */
    selectItem(ngModelFromSelectItem, cssFromOptionToSelect){
        var selectItem = this.selectors.byModel(ngModelFromSelectItem);
        selectItem.click();

        this.clickByCss(cssFromOptionToSelect);
    }

    /*
    * Click on element by css
    *
    * @cssSelector
    *   element's css selector  
    * 
    * @Result
    *   Element clicked
    * 
    * @Return
    *   -
    */
    clickByCss(cssSelector){
        var element = this.selectors.byCss(cssSelector);
        element.click();
    }
    
    /*
    * Click on element by id
    *
    * @id
    *   element's id
    * 
    * @Result
    *   Element clicked
    * 
    * @Return
    *   -
    */
    clickById(elementId){
        var element = this.selectors.byId(elementId);
        element.click();
    }

    /*
    * Fill input
    *
    * @text
    *   Text to be inputed
    * 
    * @cssSelector
    *   html element's css
    *  
    * @Result
    *   Input filled
    * 
    * @Return
    *   -
    */
    fillInputField(text, cssSelector){
        var inputField = this.selectors.byCss(cssSelector);
        inputField.sendKeys(text);
    }

    /*
    * Search entity by name using a QuickSearch component
    *
    * @entityName
    *   Entity's name to be searched
    * 
    * @cssSelectorInput
    *   html element's css
    *  
    * @Result
    *   Entity selected
    * 
    * @Return
    *   -
    */
    searchEntityByName_QuickSearch(entityName, cssSelectorInput){
        this.clickByCss(cssSelectorInput);

        this.fillInputField(entityName, cssSelectorInput);

        var cssSelectorSearchResult = '.test-quicksearch-result';

        this.clickByCss(cssSelectorSearchResult);
    }
}