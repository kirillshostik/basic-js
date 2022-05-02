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
 let max = 0, buf;
 n = n.toString()
 for (let i=0;i<n.length;i++) {
   buf = n.substr(0,i)+n.substr(i+1);
   console.log(Number.parseInt(buf))
   if(Number.parseInt(buf)>max) max=Number.parseInt(buf);
 }
 return max;
}

module.exports = {
  deleteDigit
};
