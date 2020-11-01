const { resetHistory } = require("sinon");
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(typeOfMachine = true) {
		this.typeOfMachine = typeOfMachine;
	}

	encrypt(message, key) {
		if (typeof(arguments[0]) !== 'string' && typeof(arguments[1]) !== 'string') {
			throw new CustomError('Not implemented');
		}
	
		message = message.toUpperCase();
		key = key.toUpperCase();

		let encryptedMessage = '';
		let j = 0;
		
		function computateLetter(letter1, letter2) {
			let letterCharCode = (letter1.charCodeAt() - 65) + (letter2.charCodeAt() - 65);
			if (letterCharCode > 25) {
				return letterCharCode - 26;
			} else {
				return letterCharCode;
			}
		}

		for (let i = 0; i < message.length; i++) {
			if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
				encryptedMessage += String.fromCharCode(computateLetter(message[i], key[j]) + 65);
			} else {
				encryptedMessage += message[i];
			}
			
			message[i] === ' ' ? j : j++;
			j === key.length ? j = 0 : j;
		}

		if (this.typeOfMachine) {
			return encryptedMessage;
		} else {
			return encryptedMessage.split('').reverse().join('');
		}
	}

	decrypt(message, key) {
		if (typeof(arguments[0]) !== 'string' && typeof(arguments[1]) !== 'string') {
			throw new CustomError('Not implemented');
		}
	
		message = message.toUpperCase();
		key = key.toUpperCase();
		
		let decryptedMessage = '';
		let j = 0;

		function computateLetter(letter1, letter2) {
			let letterCharCode = (letter1.charCodeAt() - 65) - (letter2.charCodeAt() - 65);
			if (letterCharCode < 0) {
				return letterCharCode + 26;
			} else {
				return letterCharCode;
			}
		}

		for (let i = 0; i < message.length; i++) {
			if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
				decryptedMessage += String.fromCharCode(computateLetter(message[i], key[j]) + 65);
			} else {
				decryptedMessage += message[i];
			}
			
			message[i] === ' ' ? j : j++;
			j === key.length ? j = 0 : j;
		}

		if (this.typeOfMachine) {
			return decryptedMessage;
		} else {
			return decryptedMessage.split('').reverse().join('');
		}
	}
}

module.exports = VigenereCipheringMachine;
