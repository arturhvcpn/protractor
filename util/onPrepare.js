var HtmlReporter = require('protractor-beautiful-reporter');

var mkdirp = require('mkdirp');

var getDateFormated = require('./getDateFormated.js');

var resultFolder = '../../testsProtractorResults/' + getDateFormated();

mkdirp(resultFolder);

function onPrepare () {

    //protractor-beautiful-reporter
    jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: resultFolder,
         takeScreenShotsForSkippedSpecs: true,
         screenshotsSubfolder: 'images',//'images' saved in 'screenshots/images'
         jsonsSubfolder: 'jsons',//'jsons' saved in 'screenshots/jsons'
         docTitle: 'Test Plataform Target',//title on main html page
         docName: 'index.html',
         gatherBrowserLogs: true, 
         clientDefaults:{
             searchSettings:{//Search options
                 allselected: false,
                 passed: false,
                 failed: true,//When access index.html, 'failed' tests will be showed by default
                 pending: false,
                 withLog: false
             },
             columnSettings:{//Details showeds
                displayTime:true,
                displayBrowser:true,
                displaySessionId:true,
                displayOS:true,
                inlineScreenshots:true
            },
            columnSettings:{
                  warningTime: 1000,
                  dangerTime: 1500
            }
         }
    }).getJasmine2Reporter()); 

    //Getting brownserName during execution
    browser.driver.getCapabilities().then(function(caps){
        browser.browserName = caps.get('browserName');
    });
}

module.exports =  onPrepare;