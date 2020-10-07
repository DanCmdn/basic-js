const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
		let resultDepth = 1;
		let currentDepth = 1;
		arr.forEach(element => {
			if (Array.isArray(element)) {
				currentDepth += this.calculateDepth(element);
			}
			if (currentDepth > resultDepth) {
				resultDepth = currentDepth;
			}
			currentDepth = 1;
		});
		return resultDepth;
	}
};