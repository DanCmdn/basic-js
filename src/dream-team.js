module.exports = function createDreamTeam(members) {
	if (!members || typeof (members[Symbol.iterator]) !== 'function') {
		return false;
	}

	let arrOfLetters = [];
	for (let name of members) {
		if (typeof (name) == 'string') {
			name = name.trim();
			arrOfLetters.push(name[0].toUpperCase());
		}
	}
	return arrOfLetters.sort().join('');
}