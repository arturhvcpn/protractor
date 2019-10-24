const MenuPlus = require('../../navigation/menu/menuPlus.po');
const MenuManagementPage = require('../../navigation/menu/menuManagement.po');
const MenuPageConfiguration = require('../../navigation/menu/menuPageConfiguration.po');
const MenuIndicators = require('../../navigation/menu/menuIndicators.po');
const MenuQuickAccessPage = require('../../navigation/menu/menuQuickAccess.po');
const MenuNotificationPage = require('../../navigation/menu/menuNotification.po');
const MenuUsersPage = require('../../navigation/menu/menuUser.po');
const PresentationPage = require('../../navigation/menu/menuPresentation.po');

describe('Teste Navegacao', function(){
	
	let menuPlusPage;
	let menuManagementPage;
	let menuPageConfiguration;
	let menuIndicatorsPage;
	let menuQuickAccessPage;
	let menuNotificationPage;
	let menuUsersPage;
	let menuPresentation;

	const interval = 0;//em milisegundos

	beforeEach(function(){

		menuPlusPage = new MenuPlus();
		menuManagementPage = new MenuManagementPage();
		menuPageConfiguration = new MenuPageConfiguration();
		menuIndicatorsPage = new MenuIndicators();
		menuQuickAccessPage = new MenuQuickAccessPage();	
		menuNotificationPage = new MenuNotificationPage();
		menuUsersPage = new MenuUsersPage();
		menuPresentation = new PresentationPage();
		

	})
	
	it('Opened Menu Plus', function() {
		
		menuPlusPage.open();
		browser.sleep(interval)
	})
	
	it('Opened Menu Management', function() {
		
		menuManagementPage.open();
		browser.sleep(interval)
	})
	
	it('Opened Menu Page Configuration', function() {
		
		menuPageConfiguration.open();
		browser.sleep(interval)
	})
	
	it('Opened Menu Indicators', function() {
		
		menuIndicatorsPage.open();
		browser.sleep(interval)
	})
	
	it('Opened Menu Quick Access', function() {
		
		menuQuickAccessPage.open();
		browser.sleep(interval)
	})
	it('Opened Menu Notification', function() {
		
		menuNotificationPage.slideBarOpen();
		browser.sleep(interval)
	})

	it('Closed Menu Notification', function() {
		
		menuNotificationPage.slideBarClose();
		browser.sleep(interval)
	})

	it('Closed Menu User Page', function() {
		
		menuUsersPage.open();
		browser.sleep(interval)
	})
	
	it('Closed Menu Presentation', function() {
		
		menuPresentation.open();
		browser.sleep(interval)
	})

});

