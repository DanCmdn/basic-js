module.exports = function getSeason(date) {
	if (!date) {
		return 'Unable to determine the time of year!';
	}
	
	if (Object.entries(date).length > 0) {
		throw Error;
	}

	let month = date.getMonth();
	if (month === 11 || (month >= 0 && month <= 1)) {
		return 'winter';
	} else if (month >= 2 && month <= 4) {
		return 'spring';
	} else if (month >= 5 && month <= 7) {
		return 'summer';
	} else if (month >= 8 && month <= 10) {
		return 'fall';
	}
}