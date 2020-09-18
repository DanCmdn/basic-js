module.exports = function countCats(arr) {
	let i = 0;
	for (let item of arr) {
		for (let itemInside of item) {
			if (itemInside === '^^') {
				i += 1;
			}
		}
	}
	return i;
}