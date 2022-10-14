const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = String(n).split('');
  num = num.map(el => el = +el);
  const min = Math.min(...num);
  const indexMin = num.indexOf(min);
  num.splice(indexMin, 1);
  return +num.join('')
}

module.exports = {
  deleteDigit
};
