const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");
  let arrRes = [];
  let check = ['--discard-next','--discard-prev','--double-next','--double-prev']
  for (let i=0;i<arr.length;i++) {
    if(arr[i]=='--discard-next'&&i!=arr.length-1) {
      if (!check.includes(arr[i+1])) {
        i++;
        continue;
      }
    }
    else if(arr[i]=='--discard-prev'&&i>0) {
      if (!check.includes(arr[i-1])) {
        if (arrRes[arrRes.length-1]==arr[i-1]&&arr[i-2]!='--discard-next') {
          arrRes.pop();
        }
        
        continue;
      }
      
    }
    else if (arr[i]=='--double-next'&&i!=arr.length-1) {
      if (!check.includes(arr[i+1])) {
        arrRes.push(arr[i+1]);
        continue;
      }
    }
    else if (arr[i]=='--double-prev'&&i>0) {
      if (!check.includes(arr[i-1])) {
        if (arr[i-1]==arrRes[arrRes.length-1]) {
          arrRes.push(arr[i-1]);
        }
        else {continue}
      }    
     }   
     else if(!check.includes(arr[i])) {arrRes.push(arr[i])} 
    }
  return arrRes;
}

module.exports = {
  transform
};
