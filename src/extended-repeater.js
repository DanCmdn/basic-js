const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
	let firstArr = [];
	let secondArr = [];
	for (let i = 0; i < additionRepeatTimes; i++) {
		secondArr.push('' + addition);
	};
	let secondStr = secondArr.join(additionSeparator);
	for (let j = 0; j < repeatTimes; j++) {
		firstArr.push('' + str + secondStr);
	};
	return firstArr.join(separator);
};