const navigateSuite = require('./specs/suites/navigate');
const loginSpec = './specs/specLogin.js';

exports.config = {
  onPrepare: require('./util/onPrepare'),
  //onComplete: ...
  
  //With this property, [localy (localhost)] it is not necessary 
  //execute 'webdriver-manager start' command
  directConnect: true,
  
  //How to execute: protractor conf.js --suite l
  suites: {
    l: loginSpec, //LOGIN
    n: navigateSuite, //NAV over all MENUS and SUBMENUS
    i: [loginSpec, 'specs/indicator/specIndicator.js'] //Specific entity test cases
    //r: regressionSuite,
  },

  multiCapabilities: [
    {'browserName': 'chrome'}
    // ,{'browserName': 'firefox'}
    // ,{'browserName': 'safari'} 
    // ,{'browserName': 'ie'}E
  ],
  
  //Max amount of opened browser. If multiCapabilities has 2 broserNames, 2 browsers will be open at same time
  maxSessions: 2,

  //It is possible setting data on system environments and get them here, like below
  params: {
    url: process.env.TARGET_URL,
    user: process.env.TARGET_USER,
    password: process.env.TARGET_PASSWORD,
  },

  //We can use array of specs
  //Command 'protractor conf.js' will looking for this specs.
  specs: [
    './specs/specLogin.js'
    ,'./specs/navigation/specNavigationMenus.js'
  ],

};
