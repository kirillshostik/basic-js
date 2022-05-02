const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor (direction = true) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if (!message || !key|| typeof message !== 'string' || typeof key !== 'string') {
      throw new Error("Incorrect arguments!");
    }
    let result = '';
    let msg, k;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j=0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
        msg = message.charCodeAt(i) - 65;
      k = key.charCodeAt(j%key.length) - 65;
      result += String.fromCharCode(((msg+k)%26) + 65);
      j++;
      }
      else  {result +=message[i]}
    }
    return this.direction? result: result.split('').reverse().join('');
  }

  
  decrypt(message, key) {
    if (!message || !key|| typeof message !== 'string' || typeof key !== 'string') {
      throw new Error("Incorrect arguments!");
    }
    let result = '';
    let msg, k;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j=0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/)) {
      msg = message.charCodeAt(i) - 65;
      k = 26 -  (key.charCodeAt(j%key.length) - 65);
      result += String.fromCharCode(((msg+k)%26) + 65);
      j++;
      }
      else  {result +=message[i]}
    }
    return this.direction? result: result.split('').reverse().join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};
