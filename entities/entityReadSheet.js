//Data Driven Test
const Excel = require('exceljs');
let getDateFormated = require('../util/getDateFormated');

module.exports = class EntityReadSheet {

    constructor(filePath, sheetName){
        this.filePath = filePath;
        this.sheetName = sheetName;

        this.getDateFormated = getDateFormated;
        this.workBook = new Excel.Workbook();
    }

    readFileAsync(){
        
        let workBook = new Excel.Workbook();

        return workBook.xlsx.readFile(this.filePath).then( () => {
            return this._readSheet(workBook);
        }).catch(err => {
            console.log('readFileAsync error: ', err);
        });;

    }

    _readSheet(workBook){
        
        let workSheet = workBook.getWorksheet(this.sheetName);
        
        let lines = [];
        
        workSheet.eachRow(function(row, rowNumber) {
            
            lines.push(row);
            
        });
        
        lines = this._removeHeader(lines);
        
        return lines;
    }

    _removeHeader(lines){
        lines.shift();
        return lines;
    }

}