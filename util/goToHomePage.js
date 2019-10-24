function goToHomePage (selectors) {
	let seletorLogoHome =  '.logo';

	let elto = selectors.byCss(seletorLogoHome);

	elto.click();
}
module.exports = goToHomePage;
