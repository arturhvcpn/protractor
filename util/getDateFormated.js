function getDateFormated() {
	var today = new Date();

	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	
	var hour = today.toTimeString().slice(0, 2);
	var minute = today.toTimeString().slice(3, 5);
	var second = today.toTimeString().slice(6,8);
	var time = hour + ":" + minute + ":" + second;

	today = yyyy + mm + dd + ' - ' +time;
	return today;	
}
module.exports = getDateFormated;
