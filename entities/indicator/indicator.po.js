const Entity = require('../entity.po');

module.exports = class Indicator extends Entity {

    constructor(name, agency, responsible, monitor){
        super();
        this.name = name;
        this.agency = agency;
        this.responsible = responsible;
        this.monitor = monitor;
    }
}