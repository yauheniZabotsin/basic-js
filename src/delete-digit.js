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
  let min = Math.min(...num);
  let indexMin = num.indexOf(min);
  if(indexMin !== num.length && num.length === 2){
    num.splice(indexMin, 1);
  }else{
    let newNum = num.map(el => el = +el);
    newNum.splice(newNum.length-1)
    min = Math.min(...newNum);
    indexMin = num.indexOf(min);
    num.splice(indexMin, 1);
  }
  console.log(+num.join(''))
  return +num.join('')
}

module.exports = {
  deleteDigit
};
