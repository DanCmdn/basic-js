module.exports = function transform(arr) {
	if (!Array.isArray(arr) || !arr) {
		throw new Error();
	};

	let finArr = arr.slice();
	for (let i = 0; i < finArr.length; i++) {
		if (finArr[i] === '--discard-next') {
			if (finArr[i + 2] === '--double-prev') {
				finArr.splice(i, 3);
			} else if (finArr[i + 2] === '--discard-prev') {
				finArr.splice(i, 3);
			} else if (i === arr.length - 1) {
				finArr.splice(i, 1);
			} else {
				finArr.splice(i, 2);
			}
		} else if (finArr[i] === '--discard-prev') {
			if (i === 0) {
				finArr.splice(0, 1);
			} else {
				finArr.splice(i - 1, 2);
			}
		} else if (finArr[i] === '--double-next') {
			if (i === arr.length - 1) {
				finArr.splice(i, 1);
			} else {
				finArr[i] = finArr[i + 1];
			}
		} else if (finArr[i] === '--double-prev') {
			if (i === 0) {
				finArr.splice(0, 1);
			} else {
			finArr[i] = finArr[i - 1];
			}
		} 
	};
	return finArr;
};