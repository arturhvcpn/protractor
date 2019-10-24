const Selectors = require('../../util/Selectors');
const SpecBy = require('../../util/SpecBy');

module.exports = class Menu extends SpecBy{

    constructor(selector){
        super();
        this.selector = selector;

        this.selectors = new Selectors();
    }

    open(){

        this.click();
        
    }
    
    close(){

        this.click();
        
    }
    
    click(){

        if(this.isXpathSelector(this.selector)){

            /**
             * TO DO: 
             *      Remove this when html elements is 't-' class pattern
             *      So, we could use only byCss() showed above
             * */
            this.selectors.byXpath(this.selector).click();
            
        } else {
            
            this.selectors.byCss(this.selector).click();
        }
    }

    isXpathSelector(selector){
        let firstXpathCharacter = '/';

        if(selector.charAt(0) === firstXpathCharacter)
            return true;
        
        return false;
    }
}