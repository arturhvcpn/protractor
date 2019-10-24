const Entity = require('../entity.po');

module.exports = class Indicator extends Entity {

    constructor(name){
        super();
        this.name = name;
    }

}