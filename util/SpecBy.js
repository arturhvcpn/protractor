class SpecBy {

    constructor(){}

    byAttribute(selectedElement, attributeName, attributeValueToSpec){

        expect(selectedElement.getAttribute(attributeName)).toEqual(attributeValueToSpec);
    }
    
    isPresent(elto){

        let isPresent = elto.isPresent();

        expect(isPresent).toBe(true);
    }

    validateAccessPageByXpath(xPathSelector, attributeName, attributeValueToValidate){
        var elto = this.selectors.byXpath(xPathSelector);
    
        this.validate(elto, attributeName,attributeValueToValidate);
    }

    validateAccessPageByCss(cssSelector, attributeName, attributeValueToValidate){
        
        var elto = this.selectors.byCss(cssSelector);

        this.validate(elto, attributeName,attributeValueToValidate);
    }
    
    validate(elto, attributeName, attributeValueToValidate){
        this.byAttribute(elto, attributeName, attributeValueToValidate);

    }
}

module.exports = SpecBy;