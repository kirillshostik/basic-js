const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: "",
  getLength() {
    return this.chain.match(/~~/g).length + 1;
  },
  addLink(v) {
    if (this.chain.length>0) {this.chain+='~~'}
    this.chain+='( '
    this.chain+=v;
    this.chain+=' )'
    return this;
  },
  removeLink(position) {
    if (this.getLength()<position||position<=0|| typeof position != "number") {
      this.chain = ""
      throw new Error ("You can't remove incorrect link!")
    }
    this.chain = this.chain.split('~~');
    this.chain.splice(position-1,1);
    this.chain = this.chain.join('~~');
    return this;

  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join("~~")
    return this
  },
  finishChain() {
    let finished = this.chain;
    this.chain = "";
    return finished;
  }
};

module.exports = {
  chainMaker
};
