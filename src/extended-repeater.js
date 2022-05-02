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
  let repeatTimes = options.repeatTimes || 0,
  separator = options.separator || "+",
  additionRepeatTimes = options.additionRepeatTimes || 0,
  additionSeparator = options.additionSeparator || "|",
  addition = String(options.addition) == "undefined" ? "" : String(options.addition),
  additionalResult = [],
  res = [];
  str = String(str)

  if(addition&&additionRepeatTimes) {
    addition = (addition + additionSeparator).repeat(additionRepeatTimes).split(additionSeparator);
    addition.pop();
    addition = addition.join(additionSeparator)
  }

  if(str&&repeatTimes) {
    if (!addition) {
      res = (str+separator).repeat(repeatTimes).split(separator);
    }
    else {
      res = (str+addition+separator).repeat(repeatTimes).split(separator);
    }
    res.pop();
    res = res.join(separator)
  }
  else {
    res += str;
    if (addition) {res+=addition}
  }

  return res;
}

module.exports = {
  repeater
};
