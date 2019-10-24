const IndicatorAccessView = require('./indicatorAccessView.po');

module.exports = class IndicatorAddView extends IndicatorAccessView {

    constructor(){
        super();
    }

    accessPage(){
        
        super.accessPage();

        var addButtonSelector = 
            '.test-indicator-open-add-view';

        this.clickByCss(addButtonSelector);

    }
}