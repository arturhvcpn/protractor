const EntityReadSheet = require('../../entityReadSheet');
const Indicator = require('../indicator.po');
const FILE_PATH = '../../ddt_Indicator.xlsx';
const SHEET_NAME = 'Indicator';

module.exports = class IndicatorReadSheet extends EntityReadSheet {

    constructor(){
        super(FILE_PATH, SHEET_NAME);
    }

    getIndicators(){

        return this.readFileAsync().then(lines => {

            return this._getIndicatorsFromLines(lines);

        }).catch(err => {

            console.log("Erro na classe IndicatorReadSheet, função 'getIndicators': ", err);
        });

    }

    _getIndicatorsFromLines(lines){
        let indicators = [];

        lines.forEach(line => {

            let indicator = this._buildIndicator(line);

            indicators.push(indicator);
        });
        
        return indicators;
    }

    _buildIndicator(line){

        let name = this._getName(line);
        
        let agency = line.getCell(3).value;
        let responsible = line.getCell(4).value;
        let monitor = line.getCell(5).value;

        let indicator = new Indicator(name, agency, responsible, monitor);

        return indicator;
    }

    _getName(line){
        let id = ''.concat(line.getCell(1).value);
        
        let name = line.getCell(2).value;
        
        let dataTime = this.getDateFormated();

        return id.concat(' - ')
            .concat(name).concat(' - ')
            .concat(dataTime).concat(' - ')
            .concat(browser.browserName);
    }


}