module.exports = function transform(arr) {
	if (!Array.isArray(arr) || !arr) {
		throw new Error();
	}

	let finalArr = [];

	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--discard-prev':
				finalArr.pop();
				break;
			case '--double-next':
				if (arr[i + 1] !== undefined) {
					finalArr.push(arr[i + 1]);
				}
				break;
			case '--double-prev':
				if (arr[i - 1] !== undefined) {
					finalArr.push(arr[i - 1]);
				}
				break;
			case '--discard-next':
				if (arr[i + 2] && arr[i + 2].toString().includes('-prev')) {
					i += 2;
				} else {
					i += 1;
				}
				break;
			default:
				finalArr.push(arr[i]);
				break;
		}
	}

	return finalArr;
}