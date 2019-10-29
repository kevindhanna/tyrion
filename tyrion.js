'use strict';

function describe(desc, fn) {
    var para = document.createElement("P");
    para.innerText = desc;
    fn();
  };

function it(msg, fn) {
    return describe('  ' + msg, fn);
  };

function expect(exp) {
    checkError(exp);
    if (this instanceof expect) {
    this.exp = exp;
    } else {
    return new expect(exp);
    }
  };

expect.prototype.toBe = function(assertion) {
    checkError(assertion);
    if (this.exp === assertion) {
      console.log('pass');
      return true;
    } else if (!this.exp) {
      console.log("expectation is " + this.exp);
      return false;
    } else {
      console.log('fail');
      return false;
    }
  };

function checkError(input) {
    try {
        input;
      }
    catch(error) {
    console.error(error);
    }
  };