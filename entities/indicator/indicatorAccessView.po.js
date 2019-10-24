const EntityAccessView = require('../entityAccessView.po');
const SubMenuIndicators = require('../../navigation/subMenus/subMenuIndicators/subMenuIndicators.po');

module.exports = class IndicatorAccessView extends EntityAccessView {

    constructor(){
        
        let subMenuIndicators = new SubMenuIndicators();
        
        super(subMenuIndicators);

    }

    accessPage(){
        super.accessPage();

    }

}