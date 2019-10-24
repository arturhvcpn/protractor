/**
 * 
 */
class Selectors {
   
    constructor(){}

    /**
     * Locates an element by its ID attribute
     * 
     * @param id - element's id to select it on DOM
     * 
     * @return web element
     */
    byId(id){
        return element(by.id(id));
    }
    
    /**
     * Locates elements using a CSS
     * 
     * @param cssSelector - element's css to select it on DOM
     *  Exemple: cssSelector = '.test-indicator-tab-data'
     * 
     * @return web element
     */
    byCss(cssSelector){
        return element(by.css(cssSelector));
    }

    /*
    * Locates elements using a CSS selector hierarcly
    * Exemple:
    *      <div class="parent">
    *          <div class="child">...
    * 
    * Selector will be:
    *      let child = element(by.css('.parent')).element(by.css('.child'));
    */
    byCssHierarchy(classesArray){
        if(classesArray && classesArray.length > 0){

            var webElement = element(by.css(classesArray[0]));

            classesArray.shift();

            classesArray.forEach(cssToFind => {
                webElement = webElement + "." + element(by.css(cssToFind));
            });

            return webElement;
        }
    }

    /**
     * Locates elements matching a XPath selector
     * 
     * @param xpath - element's path to select it on DOM
     * 
     * @return web element
     */
    byXpath(xpath){
        return element(by.xpath(xpath));
    }
    
    /**
     * Locates elements matching a ng-model attribute
     * 
     * @param xpath - element's path to select it on DOM
     * 
     * @return web element
     */
    byModel(model){
        
        return element(by.model(model));
    }

    /**
     * Locates elements matched by tagName
     * 
     * @param tagName - Tag's name
     * Exemple html: <input ...> </input>
     *  tagName = input
     *         
     * @return web element
     */
    byTagName(tagName){
        
        return element(by.tagName(tagName));
    }

}

module.exports = Selectors;