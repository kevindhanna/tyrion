(function(exports) {
  function Describe(desc, fn) {
      var div = document.getElementById('test-results')
      this.el = document.createElement('p')
      this.ul = document.createElement('ul')
      this.el.innerHTML = desc
      div.appendChild(this.el)
      this.el.appendChild(this.ul)
      fn();
    };
    function It(msg, fn) {
      this.li = document.createElement('li')
      this.li.innerHTML = msg
      this.ul.appendChild(this.li)
      fn()
      // return Describe(' ' + msg, fn);
    };
    // function Expect(statement){
    //   this.statement = statement;
    //   this.test = statement.toString()
    //   return this.statement
    // };
    // Expect.prototype.toBe = function(checker) {
    //   if (this.statement === checker) {
    //     console.log('pass');
    //     return true;
    //   } else {
    //     console.log(`Expected ${this.test} to return ${checker} but got ${this.statement}`);
    //     return false;
    //   }
    // }
    function Demand(value) {
      var li = this.li
      this.statement = value.toString()
      if (this instanceof Demand) {
        this.value = value
      } else {
        return new Demand(value)
      }
    }
    Demand.prototype = {
      toBe: function(comparator) {
        if(this.value === comparator) {
          console.log('pass')
          li.setAttribute('class', 'pass')
          return true
        } else {
          li.setAttribute('class', 'fail')
          console.log(`Demanded ${this.statement} to be ${comparator} but he's fucked`);
          return false
        }
      },
      notToBe: function(comparator) {
        if(this.value !== comparator) {
          li.setAttribute('class', 'pass')
          return true
        } else {
          li.setAttribute('class', 'fail')
          return false
        }
      },
    toBeAVassalOf: function(comparator) {
      if(comparator.includes(this.value)) {
        return true
      } else {
        return false
      }
    },
    toKnowNothing: function(){
      if (this.value === undefined) {
        return true
      } else {
        return false
      }
    },
    wasSummoned: function(){
      try {
        if (this.value.called === true) { 
          return true
        } else {
          return false
        }
      } catch (error) {
        return false
      }
    },
    wasSummonedWith: function() {
      try {
        for(i = 0; i < this.value.args.length; i++) {
          if (arguments[i] !== this.value.args[i]) {
            return false
          }
          return true
        }
      } catch(error) {
        return false
      }
    }
  }

  function LittleBird(obj, method) {
    if (this instanceof leerAt) {
      this.obj = obj
      this.method = method
      var count = 0
      obj[`${method}`] = function(count) {
        count += 1
        this[`${method}`].called = true
        this[`${method}`].args = arguments
      }
    } else {
      return new leerAt(obj, method)
    }
  }

  LittleBird.prototype = {
    andRespond: function(value) {
      var obj = this.obj
      var method = this.method
      obj[`${method}`] = function () {
        this[`${method}`].called = true
        return value
      }
    }
  }

  exports.Describe = Describe
  exports.It = It
  exports.Demand = Demand
  exports.LittleBird = LittleBird
})(this)
