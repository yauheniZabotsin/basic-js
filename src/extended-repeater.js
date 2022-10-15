const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const objOptions = options;
	let result = '';
	const obj = {
		repeatTimes() {
			let value = objOptions.repeatTimes;
			if (value === undefined) result += str, this.addition();
			for (let i = 1; i <= value; i++) {
				if (!(Number.isInteger(value))) {
				} else result += `${str}`;
				this.addition();
				i < value ? this.separator() : '';
			}
			return result;
		},
		addition() {
			let value = objOptions.addition;
			if (objOptions.additionRepeatTimes === undefined) result += `${value === undefined ? '' : value}`;
			for(let i = 1; i <= objOptions.additionRepeatTimes; i++) {
				result += value;
				i < objOptions.additionRepeatTimes ? this.additionSeparator() : '';
			}
		},
		additionSeparator() {
			let value = objOptions.additionSeparator;
			value === undefined ? result += '|' : result += value;
		},
		separator() {
			let value = objOptions.separator;
			value === undefined ? result += '+' : result += value;
		}
	}
	return obj.repeatTimes();
}

module.exports = {
  repeater
};
